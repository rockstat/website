import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'public/**', 'next-env.d.ts']),
  ...nextVitals,
  {
    rules: {
      // the site uses plain <img> and <a> deliberately (static export, external links)
      '@next/next/no-img-element': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }]
    }
  }
]);
