import { revalidateTag, revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

const WEBHOOK_SECRET = process.env.STRAPI_WEBHOOK_SECRET;

export async function POST(request) {
    try {
        const headersList = headers();
        const secret = headersList.get('x-webhook-secret');

        if (secret !== WEBHOOK_SECRET) {
            return Response.json(
                { message: 'Invalid webhook secret' },
                { status: 401 }
            );
        }

        const body = await request.json();

        // Extract model from different possible formats
        let model = body?.model || body?.event || body?.entry?.collection || '';
        if (model.includes('::')) {
            model = model.split('::')[1].split('.')[0];
        }
        model = model.toLowerCase();

        if (!model) {
            return Response.json(
                { message: 'Model not found in webhook payload' },
                { status: 400 }
            );
        }

        console.log('🟢 Webhook triggered for model:', model);

        await revalidateTag(model);

        const pathsToRevalidate = {
            galleries: ['/collection'],
            'background-images': ['/'],
            asides: ['/', '/about', '/services'],
            ceos: ['/about'],
            teams: ['/about'],
        };

        if (pathsToRevalidate[model]) {
            console.log('🔁 Revalidating paths:', pathsToRevalidate[model]);
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
        console.error('❌ Revalidation error:', error);
        return Response.json({ message: error.message }, { status: 500 });
    }
}
