const withSass = require('@zeit/next-sass')
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SUMMARY_JSON = require('./content/summary.json')
const routes = require('./routes')

const extarctCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!resolve-url-loader'
});

const extarctSCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader?module&importLoaders=1&localIdentName=[local]__[hash:base64:5]!resolve-url-loader!sass-loader'
});

module.exports = {
  exportPathMap: () => {
    const posts = {}
    const paths = {}
    SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap)
      .forEach((file) => {
        const fileObj = SUMMARY_JSON.fileMap[file]
        const obj = {}
        if (fileObj.id && fileObj.parent) {
          if (fileObj.paths) {
            // Handle custom paths / aliases.
            obj.page = fileObj.page
            obj.query = { filePath: fileObj.filePath }
            fileObj.paths.forEach((path) => {
              paths[path] = obj
            })
          } else if (file.indexOf('content/docs') === 0) {
            // Handle posts.
            const page = '/ru' + file.split('content').join('').split('.json').join('')
            posts[page] = {
              page: '/ru/docs',
              query: {
                fullUrl: page
              }
            }
          }
        }
      });
    return Object.assign({}, {
      '/': { page: '/' }
    }, posts, paths) // aliases
  },
  webpack: (config) => {
    // config.node = {
    //   fs: false
    // }
    config.plugins.push(
      new ExtractTextPlugin({
        filename: 'static/css/style.css',
        allChunks: true
      })
    )

    config.module.rules.push(
      {
        test: /\.(scss)$/,
        use: extarctSCSS,
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: extarctCSS,
        exclude: /node_modules/,
      },
      // {
      //   test: /\.md$/,
      //   use: [
      //       {
      //           loader: "html-loader"
      //       },
      //       {
      //           loader: "markdown-loader",
      //           options: {
      //             pedantic: true
      //           }
      //       }
      //   ]
      // },
      {
        test: /\.(woff2|woff?|otf|ttf|eot|svg)$/,
        loader: 'file-loader?name=static/fonts/[name].[ext]?[hash:base64:5]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[path][name].[ext]'
            }
          }]
      }
    );

    return config;
  }
};
