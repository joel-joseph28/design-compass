export default {
    async fetch(request, env, ctx) {
        
        const origin = request.headers.get('Origin');

        if (request.method === 'OPTIONS') {
            return handleOptions(origin);
        }

        if (request.method !== 'POST') {
            return jsonResponse({ error: 'Method not allowed' }, 405);
        }

        try {
            const formData = await request.formData();
            
            const imageFile = formData.get('file');

            if (!imageFile) {
                return jsonResponse({ error: 'No image file uploaded' }, 400);
            }

            const imageExt = getImageExt(imageFile.name);
            const uniqueFilename = `${Date.now()}${imageExt}`;

            const blob = new Blob([imageFile]);
            const arrayBuffer = await blob.arrayBuffer();
            await env.MY_BUCKET.put(uniqueFilename, arrayBuffer, {
                httpMetadata: {
                    contentType: imageFile.type,
                },
            });

            const imageName = `${uniqueFilename}`;

            return jsonResponse({ 
                message: 'Image uploaded successfully', 
                url: imageName 
            });
        } catch (err) {
            return jsonResponse({ error: `Error uploading image: ${err.message}` }, 500);
        }
    }
};

function handleOptions(origin) {
    
    const allowedOrigins = [
        'https://decoded-cipher.github.io',
        'https://amith-abey-stephen.github.io'
    ];

    const allowOrigin = allowedOrigins.includes(origin) ? origin : '';
    
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': allowOrigin,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
        },
    });
}

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

function getImageExt(imgName) {
    if (typeof imgName !== 'string') {
        imgName = String(imgName);
    }

    const extMatch = imgName.match(/\.(jpe?g|png|gif|webp)$/i);
    return extMatch ? extMatch[0] : '.jpg';
}
