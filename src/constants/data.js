const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const DEFAULT_IMAGE = '/cc.png';

async function fetchFromStrapi(endpoint, options = {}, processData) {
    try {
        // Extract model name from the endpoint
        const model = endpoint.split('?')[0].toLowerCase(); // normalize to lowercase
        console.log('Fetching from Strapi model:', model); // DEBUG

        const fetchOptions =
            process.env.NODE_ENV === 'development'
                ? { cache: 'no-store' }
                : {
                      cache: 'force-cache', // Keep strong caching
                      headers: {
                          'Cache-Control':
                              'public, s-maxage=3600, stale-while-revalidate',
                      },
                      next: {
                          tags: [model], 
                          revalidate: 3600, // Fallback hourly revalidation
                      },
                  };

        const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
            ...fetchOptions,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.error?.message || `Failed to fetch ${endpoint}`
            );
        }

        return processData ? processData(data.data) : data.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error.message);
        return [];
    }
}

export const fetchProjects = () =>
    fetchFromStrapi(
        'galleries?populate=image&pagination[limit]=1000',
        {},
        (data) =>
            data.map((project) => ({
                id: project.id,
                name: project.name,
                image: project.image?.url || DEFAULT_IMAGE,
            }))
    );

export const getBackgroundImages = () =>
    fetchFromStrapi('background-images?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

export const getAsideImages = () =>
    fetchFromStrapi('asides?populate=image', {}, (data) =>
        data.map((item) => ({
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

export const getCeosImages = () =>
    fetchFromStrapi('ceos?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

export const getTeamImages = () =>
    fetchFromStrapi('teams?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            position: item.position,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );
