const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const REVALIDATE_TIME = 3600; // 1 hour in seconds
const DEFAULT_IMAGE = '/cc.png';

/**
 * Fetches data from Strapi API with consistent error handling and caching
 * @param {string} endpoint - The API endpoint to fetch from
 * @param {Object} options - Additional fetch options
 * @param {Function} processData - Function to process the response data
 * @returns {Promise<Array>} Processed data array
 */
async function fetchFromStrapi(endpoint, options = {}, processData) {
    try {
        // Extract the model name from the endpoint (e.g., 'galleries' from 'galleries?populate=image')
        const model = endpoint.split('?')[0];

        // Enhanced caching strategy for production
        const fetchOptions =
            process.env.NODE_ENV === 'development'
                ? { cache: 'no-store' } // Disable cache in development
                : {
                      cache: 'force-cache', // Force browser-level caching
                      next: {
                          tags: [model], // Enable tag-based revalidation
                          revalidate: 3600, // Fallback revalidation every hour
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

/**
 * Fetches all projects from the gallery
 * @returns {Promise<Array<{id: string, name: string, image: string}>>}
 */
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

/**
 * Fetches background images
 * @returns {Promise<Array<{name: string, image: string}>>}
 */
export const getBackgroundImages = () =>
    fetchFromStrapi('background-images?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

/**
 * Fetches aside images for sections
 * @returns {Promise<Array<{image: string}>>}
 */
export const getAsideImages = () =>
    fetchFromStrapi('asides?populate=image', {}, (data) =>
        data.map((item) => ({
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

/**
 * Fetches CEO information and images
 * @returns {Promise<Array<{name: string, image: string}>>}
 */
export const getCeosImages = () =>
    fetchFromStrapi('ceos?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );

/**
 * Fetches team members information and images
 * @returns {Promise<Array<{name: string, position: string, image: string}>>}
 */
export const getTeamImages = () =>
    fetchFromStrapi('teams?populate=image', {}, (data) =>
        data.map((item) => ({
            name: item.name,
            position: item.position,
            image: item.image?.url || DEFAULT_IMAGE,
        }))
    );
