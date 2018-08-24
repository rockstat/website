const env = {
  // VERSION: require('./package').version,
  // 'process.env.NODE_ENV': process.env.NODE_ENV,
  // 'process.env.API_URL': process.env.API_URL,
  IMAGE_ASSETS_URL: '',
  VIDEO_ASSETS_URL: '',
  RAW_ASSETS_URL: ''
}

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env], 'markdown-in-js/babel']
}
