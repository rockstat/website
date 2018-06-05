const withSass = require('@zeit/next-sass')
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extarctCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader'
});

const extarctSCSS = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader?module&importLoaders=1&localIdentName=[local]__[hash:base64:5]!sass-loader'
});

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: false
    }

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
      }
    );

    return config;
  }
};
