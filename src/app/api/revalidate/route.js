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

        console.log(
            '🟢 Webhook triggered for model:',
            model,
            'at:',
            new Date().toISOString()
        );
        console.log(
            '📨 Webhook headers:',
            Object.fromEntries(headersList.entries())
        );
        console.log('📦 Webhook body:', body);

        // Force immediate revalidation
        await revalidateTag(model);
        console.log('✅ Tag revalidated:', model);

        const pathsToRevalidate = {
            galleries: ['/collection', '/', '/services'],
            'background-images': [
                '/',
                '/about',
                '/collection',
                '/services',
                '/contact',
            ],
            asides: ['/', '/about', '/services'],
            ceos: ['/about'],
            teams: ['/about'],
        };

        if (pathsToRevalidate[model]) {
            console.log('🔁 Revalidating paths:', pathsToRevalidate[model]);

            // Force immediate revalidation of all paths
            for (const path of pathsToRevalidate[model]) {
                await revalidatePath(path);
                // Also revalidate the path with a trailing slash
                if (!path.endsWith('/')) {
                    await revalidatePath(path + '/');
                }
                console.log('✅ Path revalidated:', path);
            }

            // Force cache purge
            await revalidateTag('layout');
            await revalidateTag('page');
            console.log('🧹 Cache purged for layout and page tags');
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
