import { useMDXComponents as useProviderComponents } from '@mdx-js/react';

/**
 * Entry point used by @next/mdx (`providerImportSource`).
 * Delegates to @mdx-js/react so that `<MDXProvider>` in `lib/with-doc.js`
 * and `lib/with-post.js` keeps controlling which components render markdown.
 */
export function useMDXComponents(components) {
  return useProviderComponents(components);
}
