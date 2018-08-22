const withSass = require('@zeit/next-sass');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SUMMARY_JSON = require('./content/summary.json')
const getRoutes = require('./routes').getRoutes;

module.exports = withSass({
  cssModules: true,
  exportPathMap: getRoutes,
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
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[path][name].[ext]',
              fallback: 'file-loader?name=[path][name].[ext]'
            }
          }]
      }
    );

    return config;
  }
});
