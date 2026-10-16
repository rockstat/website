import { visit } from 'unist-util-visit';

/**
 * Minimal replacement for `remark-custom-blocks` (incompatible with remark 13+).
 *
 *   [[alert | Optional title]]
 *   | Block body, may span
 *   | several lines.
 *
 * becomes
 *
 *   <div class="custom-block alert-block">
 *     <div class="custom-block-heading">Optional title</div>
 *     <div class="custom-block-body">Block body, may span several lines.</div>
 *   </div>
 *
 * Markdown parses the whole construct as a single paragraph (the `| ` lines are
 * lazy continuation lines), so the plugin only needs to post-process paragraphs.
 */
const MARKER = /^\[\[\s*([A-Za-z][\w-]*)\s*(?:\|\s*([^\]]*?))?\s*\]\][ \t]*(?:\n|$)/;
const PIPE_PREFIX = /(^|\n)\|[ \t]?/g;

function stripPipes(node) {
  if (node.type === 'text') {
    node.value = node.value.replace(PIPE_PREFIX, '$1');
  }
  if (node.children) {
    node.children.forEach(stripPipes);
  }
}

function dropEmptyText(children) {
  return children.filter((child) => !(child.type === 'text' && child.value === ''));
}

export default function remarkCustomBlocks(options = {}) {
  const blocks = options.blocks || {};

  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      const first = node.children[0];
      if (!first || first.type !== 'text') return;

      const match = MARKER.exec(first.value);
      if (!match) return;
      const [marker, name, title] = match;
      const config = blocks[name];
      if (!config) return;

      first.value = first.value.slice(marker.length);
      node.children.forEach(stripPipes);

      const body = {
        type: 'paragraph',
        children: dropEmptyText(node.children),
        data: { hName: 'div', hProperties: { className: ['custom-block-body'] } }
      };

      const children = [];
      if (title && title.trim()) {
        children.push({
          type: 'paragraph',
          children: [{ type: 'text', value: title.trim() }],
          data: { hName: 'div', hProperties: { className: ['custom-block-heading'] } }
        });
      }
      children.push(body);

      parent.children[index] = {
        type: 'customBlock',
        children,
        position: node.position,
        data: { hName: 'div', hProperties: { className: ['custom-block', ...String(config.classes || '').split(/\s+/).filter(Boolean)] } }
      };
    });
  };
}
