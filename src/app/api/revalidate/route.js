import { revalidateTag } from 'next/cache';
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

        // Revalidate the specific content type that was updated
        revalidateTag(model);

        return Response.json({ revalidated: true, model }, { status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
