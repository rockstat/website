const withCSS = require('@zeit/next-css');
const remarkCustomBlocks = require('remark-custom-blocks')
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [
      [remarkCustomBlocks, {
        tip: {
          classes: 'tip-block',
          title: 'optional'
        },
      }]
    ]
  }
})


module.exports = withMDX(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    module: true,
    cssModules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
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

      {
        test: /\.(woff2|woff?|otf|ttf|eot)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
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
