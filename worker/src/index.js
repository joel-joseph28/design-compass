import { nanoid } from 'nanoid';

export default {
	async fetch(request, env) {

		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405 });
		}

		try {
			const formData = await request.formData();
			const file = formData.get('file');

			if (!file) {
				return new Response('No file uploaded', { status: 400 });
			}

			if (!file.type.startsWith('image/')) {
				return new Response('Uploaded file is not an image', { status: 400 });
			}

			const filename = `${nanoid()}.${getFileExtension(file.name)}`;

			await env.MY_BUCKET.put(filename, file);

			const publicUrl = `https://${env.R2_PUBLIC_DOMAIN}/${filename}`;

			return new Response(JSON.stringify({ url: publicUrl }), {
				headers: { 'Content-Type': 'application/json' },
			});
			
		} catch (error) {
			return new Response(`Error: ${error.message}`, { status: 500 });
		}

	},
};

function getFileExtension(filename) {
	return filename.split('.').pop();
}
