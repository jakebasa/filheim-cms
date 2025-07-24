import { revalidateTag, revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

// Webhook secret from environment variable
const WEBHOOK_SECRET = process.env.STRAPI_WEBHOOK_SECRET;

export async function POST(request) {
    try {
        const headersList = headers();
        // Verify the webhook secret
        const secret = headersList.get('x-webhook-secret');

        if (secret !== WEBHOOK_SECRET) {
            return Response.json(
                { message: 'Invalid webhook secret' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { model } = body;

        // Revalidate both the content type tag and related paths
        await revalidateTag(model);

        // Revalidate related pages based on the model
        const pathsToRevalidate = {
            galleries: ['/collection'],
            'background-images': ['/'],
            asides: ['/', '/about', '/services'],
            ceos: ['/about'],
            teams: ['/about'],
        };

        if (pathsToRevalidate[model]) {
            await Promise.all(
                pathsToRevalidate[model].map((path) => revalidatePath(path))
            );
        }

        return Response.json(
            {
                revalidated: true,
                model,
                paths: pathsToRevalidate[model] || [],
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
