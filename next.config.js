const path = require('path');
const createMDX = require('@next/mdx');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === '1'
});

const isExport = process.env.EXPORT === '1';

const customBlocks = {
  tip: { classes: 'tip-block', title: 'optional' },
  info: { classes: 'info-block', title: 'optional' },
  success: { classes: 'success-block', title: 'optional' },
  alert: { classes: 'alert-block', title: 'optional' },
  chapter: { classes: 'chapter-block', title: 'optional' }
};

// Plugins are referenced by name/path (not imported) so the config stays
// serializable for Turbopack. Local plugins need an absolute path.
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      'remark-mdx-frontmatter', // `export const frontmatter = {...}` from the YAML block
      'remark-gfm', // tables, strikethrough, task lists, autolinks (built into remark before v13)
      [path.join(__dirname, 'lib/remark/custom-blocks.mjs'), { blocks: customBlocks }],
      'remark-emoji',
      'remark-images'
    ],
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'append', properties: { className: ['heading-anchor'], ariaHidden: true, tabIndex: -1 } }],
      ['@mapbox/rehype-prism', { ignoreMissing: true }]
    ],
    recmaPlugins: [
      path.join(__dirname, 'lib/recma/attach-frontmatter.mjs')
    ]
  }
});

const dsvLoader = {
  loader: path.join(__dirname, 'lib/loaders/dsv-loader.js'),
  options: { delimiter: ';' }
};
const docsMenuLoader = path.join(__dirname, 'lib/loaders/docs-menu-loader.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  trailingSlash: true,
  output: isExport ? 'export' : undefined,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/', destination: '/ru/', permanent: false },
      { source: '/docs/intro/about/', destination: '/docs/', permanent: true }
    ];
  },
  turbopack: {
    rules: {
      '*.csv': { loaders: [dsvLoader], as: '*.js' },
      '*.yml': { loaders: [docsMenuLoader], as: '*.js' }
    }
  },
  webpack: (config) => {
    config.module.rules.push({ test: /\.csv$/, use: [dsvLoader] });
    config.module.rules.push({ test: /\.yml$/, use: [docsMenuLoader] });
    return config;
  }
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
