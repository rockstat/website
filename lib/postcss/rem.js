/**
 * Runs `@pierreburel/postcss-rem` in the `OnceExit` phase.
 *
 * PostCSS 8 interleaves plugin visitors, and postcss-rem does its work in `Once`,
 * i.e. before `postcss-mixins` has expanded `@mixin` calls. Any `rem()` inside a
 * mixin body (see styles/mixin/*.css) would therefore reach the browser untouched.
 */
const loaded = require('@pierreburel/postcss-rem');
const createRem = loaded.default || loaded;

module.exports = (options = {}) => {
  const inner = createRem(options);
  return {
    postcssPlugin: 'postcss-rem-after-mixins',
    OnceExit(root, helpers) {
      return inner.Once(root, helpers);
    }
  };
};
module.exports.postcss = true;
