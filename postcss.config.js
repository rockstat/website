const path = require('path');

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, 'styles', 'mixin')
    },
    'postcss-advanced-variables': {}, // precss
    'postcss-nested': {}, // precss
    'postcss-rem': {
      baseline: 14,
      precision: 6,
      fallback: false
    },
    'postcss-preset-env': {}, // precss
    'postcss-atroot': {}, // precss
    'postcss-property-lookup': {}, // precss
    'postcss-cssnext': {},
  }
}
