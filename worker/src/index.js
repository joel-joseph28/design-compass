export default {
    async fetch(request, env, ctx) {
        if (request.method !== 'POST') {
            return jsonResponse({ error: 'Method not allowed' }, 405);
        }

        try {
            const formData = await request.formData();
            const imageFile = formData.get('image');

            if (!imageFile) {
                return jsonResponse({ error: 'No image file uploaded' }, 400);
            }

            if (!imageFile.type.startsWith('image/')) {
                return jsonResponse({ error: 'Uploaded file is not an image' }, 400);
            }

			const imageExt = getImageExt(imageFile.name);
            const uniqueFilename = `${Date.now()}${imageExt}`;

            await env.MY_BUCKET.put(uniqueFilename, imageFile.stream(), {
                httpMetadata: {
                    contentType: imageFile.type,
                },
            });

			const imageUrl = `${env.R2_PUBLIC_DOMAIN}/${uniqueFilename}`;

            return jsonResponse({ 
                message: 'Image uploaded successfully', 
                url: imageUrl 
            });
        } catch (err) {
            return jsonResponse({ error: `Error uploading image: ${err.message}` }, 500);
        }
    }
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}

function getImageExt(imgName) {
	return imgName.slice((imgName.lastIndexOf('.') - 1 >>> 0) + 1);
}