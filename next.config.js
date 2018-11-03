const path = require('path')
const withCSS = require('@zeit/next-css');
const remarkCustomBlocks = require('remark-custom-blocks')
// const remarkCollapse = require('remark-collapse')
// const remarkRemarkFrontmatter = require('remark-frontmatter')
// const remarkEmoji = require('remark-emoji')
// const remarkHeadings = require('remark-autolink-headings')
// const remarkToc = require('remark-toc')
// const remarkStringify = require('remark-stringify')
// const remarkSlug = require('remark-slug')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')

const remarkMermaid = require('./lib/remark/mermaid');
const { generateDocsTOC } = require('./bin/rstgen');
const { ANALYZE } = process.env

// const TOCBuilder = require('./lib/table_of_contents')
// const tocBuilder = new TOCBuilder(dir, 'pages/docs/docs.yml', `constants/docs.js`);

const withMDX = require('@zeit/next-mdx')({
  options: {
    extension: /\.mdx?$/,
    mdPlugins: [
      // [remarkRemarkFrontmatter, ['yaml', 'toml']],
      [remarkMermaid, {
        // mode: 'simple',
        destinationDir: `${__dirname}/static/build/mmd`,
        pubDir: 'static/build/mmd'
      }],
      [remarkCustomBlocks, {
        tip: { classes: 'tip-block', title: 'optional' },
        info: { classes: 'info-block', title: 'optional' },
        success: { classes: 'success-block', title: 'optional' },
        alert: { classes: 'alert-block', title: 'optional' },
        chapter: { classes: 'chapter-block', title: 'optional' }
      }],
      // [remarkCollapse, {
      //   test: 'tango.*',
      //   summary: (str) => 'Give yourself away!'
      // }],
      // [remarkStringify],

      // () => console.dir,
      // [remarkSlug],
      // () => console.dir,
      // [remarkToc],
      // [remarkHeadings, {}],
      // [remarkEmoji],
    ],
    hastPlugins: [

    ]
  }
})

module.exports = withMDX(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    modules: true,
    cssModules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    console.log(`>>> exportPathMap dev=${dev}`);
    const paths = {
      '/': { page: '/index' },
      '/ru': { page: '/main' },
      '/en': { page: '/main' },
      ...defaultPathMap
    };
    if (dev) {
      // console.log('generating Table of contents');
      generateDocsTOC()
    }

    return paths;

  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  // useFileSystemPublicRoutes: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      'app': path.resolve(__dirname),
      '@app': path.resolve(__dirname)
    };

    if (ANALYZE) {
      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }

    config.module.rules.push(
      {
        test: /\.(woff2|woff?|otf|ttf|eot)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.csv$/,
        use: [{
          loader: 'dsv-loader',
          options: {
            delimiter: ';'
          }
        }]
      },
      // {
      //   test: /\.mmd$/,
      //   use: [{
      //     loader: 'mermaid-loader',
      //     options: {
      //       delimiter: ';'
      //     }
      //   }]
      // },
      // {
      //   test: /\.svg$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'svg-react-loader',
      //     options: {
      //       tag: 'symbol',
      //       // attrs: {
      //       //     title: 'example',
      //       // },
      //       // name: 'MyIcon',
      //     },
      //   },
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //         name: '[path][name].[ext]',
      //         fallback: 'file-loader?name=[path][name].[ext]'
      //       }
      //     }]
      // },
      // {
      //   test: /\.(scss)$/,
      //   use: extarctSCSS,
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.(css)$/,
      //   use: extarctCSS,
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.(yml|yaml)$/,
      //   loader: 'yaml',
      //   include: path.resolve('lib'),
      //   exclude: /node_modules/,
      // },
    );
    return config;
  }
}));
