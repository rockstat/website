const { docs } = require('./utils/menuData');

module.exports = () => {
    const paths = {
        '/': { page: '/main', query: { lang: 'ru' } },
        // '/404': { page: '/404', lang: 'ru' },
        // '/about': { page: '/about', lang: 'ru' },
        '/ru': { page: '/main', query: { lang: 'ru' } },
        '/ru/docs': { page: '/docs', query: { lang: 'ru', path: 'docs/about/about', slug: 'about' } },
    }
    for (const page of docs) {
        paths[`/ru/docs/${page.slug}`] = { page: '/docs', query: { lang: 'ru', path: page.path, slug: page.slug } }
    }

    console.log(paths)
    return paths;
}