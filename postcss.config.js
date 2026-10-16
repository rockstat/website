const path = require('path');

/**
 * Next.js replaces its default PostCSS pipeline entirely when this file exists,
 * so `postcss-flexbugs-fixes` and `postcss-preset-env` are added back explicitly.
 * Plugin order matters: mixins -> variables/@import -> nesting -> rem() -> preset-env.
 * `rem()` runs via lib/postcss/rem.js so it sees the output of mixins.
 */
module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, 'styles', 'mixin')
    },
    'postcss-advanced-variables': {
      // Sass-style @mixin/@include handling must stay off: postcss-mixins owns @mixin,
      // and with PostCSS 8's interleaved visitors advanced-variables would strip them.
      disable: '@mixin, @include, @content'
    },
    'postcss-nested': {},
    'postcss-atroot': {},
    'postcss-property-lookup': {},
    [path.join(__dirname, 'lib/postcss/rem.js')]: {
      name: 'rem',
      baseline: 14,
      precision: 6,
      fallback: true
    },
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': false
      }
    }
  }
};
