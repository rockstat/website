const path = require('path');

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.join(__dirname,'static', 'styles', 'mixin')
    },
    'postcss-advanced-variables': {}, // precss
    'postcss-nested': {}, // precss
    'postcss-rem': {
      baseline: 14,
      precision: 6,
      fallback: true
    },
    'postcss-preset-env': {}, // precss
    'postcss-atroot': {}, // precss
    'postcss-property-lookup': {}, // precss
    'postcss-cssnext': {
      features: {
        rem: false
      }
    },
  }
}
