/**
 * recma plugin: after `remark-mdx-frontmatter` has emitted
 * `export const frontmatter = {...}`, also attach it to the page component
 * (`MDXContent.frontmatter = frontmatter`). Next.js only hands `_app` the
 * default export, so this is how layouts read a page's title/description.
 */
export default function recmaAttachFrontmatter({ name = 'frontmatter' } = {}) {
  return (tree) => {
    const declared = tree.body.some(
      (node) =>
        node.type === 'ExportNamedDeclaration' &&
        node.declaration &&
        node.declaration.type === 'VariableDeclaration' &&
        node.declaration.declarations.some((d) => d.id.type === 'Identifier' && d.id.name === name)
    );
    if (!declared) return;

    tree.body.push({
      type: 'ExpressionStatement',
      expression: {
        type: 'AssignmentExpression',
        operator: '=',
        left: {
          type: 'MemberExpression',
          object: { type: 'Identifier', name: 'MDXContent' },
          property: { type: 'Identifier', name },
          computed: false,
          optional: false
        },
        right: { type: 'Identifier', name }
      }
    });
  };
}
