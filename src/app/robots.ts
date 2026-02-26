export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/static/'],
            },
            {
                userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
                crawlDelay: 10,
            },
        ],
        sitemap: 'https://kolibri-khust.com/sitemap.xml',
    };
}
