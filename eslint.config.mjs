import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'public/**', 'next-env.d.ts', 'docs-drafts/**']),
  ...nextVitals,
  ...nextTs,
  {
    // build tooling stays CommonJS: Next, PostCSS and the bundler loaders `require()` it directly
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    rules: {
      // the site uses plain <img> and <a> deliberately (static export, external links)
      '@next/next/no-img-element': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }]
    }
  }
]);
