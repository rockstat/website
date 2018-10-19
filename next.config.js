const withCSS = require('@zeit/next-css');
const remarkCustomBlocks = require('remark-custom-blocks')
const path = require('path')
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
  exportPathMap: (paths) => {
    return {
      '/': { page: '/index' },
      '/ru': { page: '/main' },
      '/en': { page: '/main' },
      ...paths
    };
  },
  // postcssLoaderOptions: {
  // },
  // distDir: 'build',
  pageExtensions: ['js', 'jsx', 'mdx'],
  // exportTrailingSlashes: false,
  // distDir: 'build',
  // useFileSystemPublicRoutes: false,
  webpack: (config) => {
    // config.node = {
    //   fs: false
    // }
    // config.plugins.push(
    //   new ExtractTextPlugin({
    //     filename: 'static/css/style.css',
    //     allChunks: true
    //   })
    // )
    // config.optimization = config.optimization || {};
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
        test: /\.csv$/, // load all .csv, .dsv, .tsv files with dsv-loader
        use: [{
          loader: 'dsv-loader',
          options: {
            delimiter: ';'
          }
        }] // or dsv-loader?delimiter=,
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
