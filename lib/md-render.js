const frontMatter = require('front-matter');
const marked = require('marked');
const hljs = require('highlight.js');

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));

function helper(className, content) {
  return `<p class="${className}">${content.slice(5).trim()}</p>`
}

function initRenderer() {
  const renderer = new marked.Renderer()
  const origin = {}

  origin.paragraph = renderer.paragraph = function (text) {
    let result
    if (/^!&gt;/.test(text)) {
      result = helper('tip', text)
    } else if (/^\?&gt;/.test(text)) {
      result = helper('warn', text)
    } else {
      result = `<p>${text}</p>`
    }
    return result
  }

  renderer.origin = origin
  return renderer
}


marked.setOptions({
  renderer: initRenderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});


exports.render = async (raw) => {
  const content = await frontMatter(String(raw));
  content.html = marked(content.body);
  return content;
}
