import type { MDXProps } from 'mdx/types';

/** Frontmatter exposed on every MDX page component by lib/recma/attach-frontmatter.mjs. */
export interface DocFrontmatter {
  title?: string;
  description?: string;
}

declare module '*.mdx' {
  const MDXComponent: ((props: MDXProps) => JSX.Element) & { frontmatter?: DocFrontmatter };
  export const frontmatter: DocFrontmatter | undefined;
  export default MDXComponent;
}
