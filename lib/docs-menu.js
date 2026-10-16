/**
 * Documentation menu: reads data/docs.yml and enriches every item with
 *  - `path`     stable id ("0-1-2") used by the side menu for expand/collapse state,
 *  - `enabled`  whether a page exists for `href` (pages/<href>.mdx|js or .../index.*),
 *  - `modified` last modification date of that page (used in sitemap.xml),
 *  - `hrefs`    all descendant hrefs (to highlight a collapsed parent).
 *
 * Used at build time by the `*.yml` loader (see lib/loaders/docs-menu-loader.js)
 * and by `rockstat build-sitemap`.
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SITE = 'https://rock.st';

const isoDate = (date) => new Date(date).toISOString().slice(0, 10);

function findPage(pagesDir, href) {
  for (const part of [href, `${href}/index`]) {
    for (const ext of ['mdx', 'js', 'jsx']) {
      const file = path.join(pagesDir, `${part}.${ext}`);
      if (fs.existsSync(file)) {
        return { file, modified: isoDate(fs.statSync(file).mtime) };
      }
    }
  }
  return null;
}

function enrich(items, pagesDir, parentPath = []) {
  let hasActiveItems = false;
  const hrefs = [];

  items.forEach((item, i) => {
    const itemPath = [...parentPath, i];
    let hasActiveChild = false;
    let page = null;

    if (item.items) {
      const child = enrich(item.items, pagesDir, itemPath);
      hasActiveChild = child.hasActiveItems;
      if (itemPath.length >= 2) {
        item.hrefs = [...child.hrefs];
      }
      hrefs.push(...child.hrefs);
    }

    if (item.href) {
      hrefs.push(item.href);
      page = findPage(pagesDir, item.href);
    }

    if (page || hasActiveChild) {
      item.enabled = true;
      if (page) item.modified = page.modified;
      hasActiveItems = true;
    }
    item.path = itemPath.join('-');
  });

  return { hasActiveItems, hrefs };
}

function loadMenu({ source, src = 'data/docs.yml', rootDir = process.cwd() } = {}) {
  const text = source !== undefined ? source : fs.readFileSync(path.join(rootDir, src), 'utf8');
  const data = yaml.load(text) || [];
  enrich(data, path.join(rootDir, 'pages'));
  return data;
}

function sitemapXml(items) {
  const urls = [];
  const walk = (nodes) => {
    for (const node of nodes) {
      if (node.enabled && node.href) {
        const end = node.href.endsWith('/') ? '' : '/';
        urls.push(`<url>\n<loc>${SITE}${node.href}${end}</loc>\n<lastmod>${node.modified}</lastmod>\n</url>`);
      }
      if (node.items) walk(node.items);
    }
  };
  walk(items);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

/**
 * Writes public/sitemap.xml and public/robots.txt. The production robots.txt is used
 * when MAIN=1 or when Vercel builds the production environment (VERCEL_ENV=production).
 */
const isProductionBuild = () => process.env.MAIN === '1' || process.env.VERCEL_ENV === 'production';

function buildSitemap({ main = isProductionBuild(), rootDir = process.cwd() } = {}) {
  const menu = loadMenu({ rootDir });
  const landing = path.join(rootDir, 'pages/ru.js');
  const entries = [
    { href: '/ru/', enabled: true, modified: isoDate(fs.statSync(landing).mtime) },
    ...menu
  ];
  const publicDir = path.join(rootDir, 'public');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml(entries));
  fs.copyFileSync(
    path.join(publicDir, 'static', main ? 'robots.txt' : 'robots_test.txt'),
    path.join(publicDir, 'robots.txt')
  );
  console.log(`sitemap.xml and robots.txt (${main ? 'production' : 'test'}) written to public/`);
}

module.exports = { loadMenu, sitemapXml, buildSitemap };
