const withCSS = require('@zeit/next-css');
const remarkCustomBlocks = require('remark-custom-blocks')
const path = require('path')

const TOCBuilder = require('./lib/scripts/table_of_contents')

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [
      [remarkCustomBlocks, {
        tip: { classes: 'tip-block', title: 'optional' },
        info: { classes: 'info-block', title: 'optional' },
        success: { classes: 'success-block', title: 'optional' },
        alert: { classes: 'alert-block', title: 'optional' }
      }]
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
    const paths = {
      '/': { page: '/index' },
      '/ru': { page: '/main' },
      '/en': { page: '/main' },
      ...defaultPathMap
    };
    if (dev) {
      console.log('generating Table of contents');
      const builder = new TOCBuilder(dir, 'data/docs.yml', `data/docs.js`);
      builder.convert()
    }

    return paths;

  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  // useFileSystemPublicRoutes: false,
  webpack: (config) => {
    config.resolve.modules = ['node_modules', '.']
    config.resolve.alias = {
      'app': path.resolve(__dirname)
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
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.csv$/,
        use: [{
          loader: 'dsv-loader',
          options: {
            delimiter: ';'
          }
        }]
      }
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
