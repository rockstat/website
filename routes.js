// const { handle: handleDocs } = require('./utils/docs-repo');
// console.log('nextjs routes module')

module.exports.getRoutes = (defaultPathMap) => {
    console.log('nextjs building routes')
    const paths = {
        '/': { page: '/index' },
        // '/404': { page: '/404', lang: 'ru' },
        // '/ru/docs': { page: '/docs', query: { lang: 'ru', path: 'docs/about/about', slug: 'about' } },
        '/ru/docs': { page: '/docs', query: { lang: 'ru' } },
        '/ru': { page: '/main', query: { lang: 'ru' } },
    }
    // for (const page of handleDocs) {
        // paths[`/ru/docs/${page.slug}`] = { page: '/docs', query: { lang: 'ru', slug: page.slug } }
        // paths[`/ru/docs/${page.slug}`] = { page: '/docs', query: { lang: 'ru', path: page.path, slug: page.slug } }
    // }
    return paths;
}
