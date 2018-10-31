const withCSS = require('@zeit/next-css');
const remarkCustomBlocks = require('remark-custom-blocks')
// const remarkCollapse = require('remark-collapse')
const remarkRemarkFrontmatter = require('remark-frontmatter')
const remarkEmoji = require('remark-emoji')
// const remarkHeadings = require('remark-autolink-headings')
// const remarkToc = require('remark-toc')
// const remarkStringify = require('remark-stringify')
// const remarkSlug = require('remark-slug')
const remarkMermaid = require('./lib/remark-mermaid');
const path = require('path')
const TOCBuilder = require('./lib/scripts/table_of_contents')

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [
      [remarkRemarkFrontmatter, ['yaml', 'toml']],
      [remarkMermaid, {
        mode: 'simple'
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
      [remarkEmoji],
    ],
    hastPlugins: [

    ]
  }
})

module.exports = withCSS(withMDX({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    modules: true,
    cssModules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    const paths = {
      '/': { page: '/index' },
      '/ru': { page: '/main' },
      '/en': { page: '/main' },
      ...defaultPathMap
    };
    if (dev) {
      console.log('generating Table of contents');
      const builder = new TOCBuilder(dir, 'pages/docs/docs.yml', `constants/docs.js`);
      builder.convert()
    }

    return paths;

  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  // useFileSystemPublicRoutes: false,
  webpack: (config) => {
    config.node = {fs: "empty"};
    config.resolve.modules = ['node_modules', '.'];
    config.resolve.alias = {
      'app': path.resolve(__dirname),
      '@app': path.resolve(__dirname)
    }

    config.module.rules.push(
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
      {
        test: /\.(woff2|woff?|otf|ttf|eot)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader'
      // },
      {
        test: /\.csv$/,
        use: [{
          loader: 'dsv-loader',
          options: {
            delimiter: ';'
          }
        }]
      },
      {
        test: /\.mmd$/,
        use: [{
          loader: 'mermaid-loader',
          options: {
            delimiter: ';'
          }
        }]
      },
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
      // }
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
      // }
    );

    return config;
  }
}));
