const withSass = require('@zeit/next-sass')
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extarctCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!resolve-url-loader'
});

const extarctSCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader?module&importLoaders=1&localIdentName=[local]__[hash:base64:5]!resolve-url-loader!sass-loader'
});

module.exports = {
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
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                  pedantic: true
                }
            }
        ]
      },
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
              name:'[path][name].[ext]'
            }
          }]
      }
    );

    return config;
  }
};
