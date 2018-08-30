const path = require('path');

module.exports = {
  plugins: {
    // Illustrational
    // 'postcss-extend-rule': {}, // precss
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, 'lib', 'style', 'mixin')
    },
    'postcss-sassy-mixins': {},
    // 'postcss-simple-vars': {},
    'postcss-advanced-variables': {}, // precss
    'postcss-rem': {},


    // 'postcss-advanced-variables': {}, // precss
    'postcss-preset-env': {}, // precss
    'postcss-atroot': {}, // precss
    'postcss-property-lookup': {}, // precss
    'postcss-nested': {}, // precss
    'postcss-cssnext': {},
    // 'postcss-pixels-to-rem': {}
    // 'postcss-css-variables': {}
  }
}