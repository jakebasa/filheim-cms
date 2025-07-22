const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchProjects = async () => {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/galleries?populate=image&pagination[limit]=1000`
        );
        const data = await res.json();

        return data.data.map((project) => ({
            id: project.id,
            name: project.name,
            image: project.image?.url ? project.image.url : '/cc.png', // fallback image
        }));
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

export async function getBackgroundImages() {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/background-images?populate=image`
        );
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.error?.message || 'Failed to fetch background images'
            );
        }

        // Extract only image URLs
        return data.data.map((item) => ({
            name: item.name,
            image: item.image?.url ? item.image.url : '/cc.png', // fallback image
        }));
    } catch (error) {
        console.error('Error fetching background images:', error.message);
        return [];
    }
}

export async function getAsideImages() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/asides?populate=image`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.error?.message || 'Failed to fetch background images'
            );
        }

        // Extract only image URLs
        return data.data.map((item) => ({
            image: item.image?.url ? item.image.url : '/cc.png', // fallback image
        }));
    } catch (error) {
        console.error('Error fetching background images:', error.message);
        return [];
    }
}

export async function getCeosImages() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/ceos?populate=image`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.error?.message || 'Failed to fetch CEO images'
            );
        }

        // Extract only image URLs
        return data.data.map((item) => ({
            name: item.name,

            image: item.image?.url ? item.image.url : '/cc.png', // fallback image
        }));
    } catch (error) {
        console.error('Error fetching CEO images:', error.message);
        return [];
    }
}

export async function getTeamImages() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/teams?populate=image`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data?.error?.message || 'Failed to fetch team images'
            );
        }

        // Extract only image URLs
        return data.data.map((item) => ({
            name: item.name,
            position: item.position,
            image: item.image?.url ? item.image.url : '/cc.png', // fallback image
        }));
    } catch (error) {
        console.error('Error fetching team images:', error.message);
        return [];
    }
}

export const projects = [
    {
        id: 1,
        category: 'Minimalist',
        title: 'Minimalist',
        image: '/cc.png',
    },
    {
        id: 2,
        category: 'Black and White',
        title: 'Black and White',
        image: '/cc-2.jpg',
    },
    {
        id: 3,
        category: 'Concord',
        title: 'Concord',
        image: '/cc-3.jpg',
    },
    {
        id: 4,
        category: 'Modern',
        title: 'Modern',
        image: '/cc-4.jpg',
    },
    {
        id: 5,
        category: 'Luxury',
        title: 'Luxury',
        image: '/cc.png',
    },
    {
        id: 6,
        category: 'Classic',
        title: 'Classic',
        image: '/cc-2.jpg',
    },
    {
        id: 7,
        category: 'Concord',
        title: 'Concord',
        image: '/cc-3.jpg',
    },
    {
        id: 8,
        category: 'Minimalist',
        title: 'Minimalist',
        image: '/cc-4.jpg',
    },
    {
        id: 9,
        category: 'Commercial',
        title: 'Commercial',
        image: '/cc.png',
    },
    {
        id: 10,
        category: 'Industrial',
        title: 'Industrial',
        image: '/cc-2.jpg',
    },
];
