
export const FONT_FAMILY_SANS =
'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

export const FONT_FAMILY_MONO =
'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'

export const COLOR_ERROR = '#FF001F'
export const COLOR_SUCCESS = '#0076FF'

export const SYNTAX_HIGHLIGHTING = `code[class*='language-'],
pre[class*='language-'] {
color: #fff;
direction: ltr;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
font-size: 0.95em;
line-height: 1.4em;
tab-size: 4;
hyphens: none;
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
color: #999;
}
.token.namespace {
opacity: 0.7;
}
.token.string {
color: #40FFC0;
}
.token.attr-value,
.token.punctuation,
.token.operator {
color: #fff;
}
.token.url,
.token.symbol,
.token.boolean,
.token.variable,
.token.constant,
.token.inserted {
color: #8700FB;
}
.token.atrule,
.language-autohotkey .token.selector,
.language-json .token.boolean,
code[class*='language-css'] {
font-weight: 600;
}
.language-json .token.boolean {
color: #0076ff;
}
.token.keyword {
color: #D900FF;
font-weight: bolder;
}
.token.function,
.token.tag,
.token.class-name,
.token.number {
color: #FF40BE;
}
.token.deleted,
.language-autohotkey .token.tag {
color: #9a050f;
}
.token.selector,
.language-autohotkey .token.keyword {
color: #ffff9f;
}
.token.important,
.token.bold {
font-weight: bold;
}
.token.italic {
font-style: italic;
}
.language-json .token.property,
.language-markdown .token.title {
color: #fff;
font-weight: bolder;
}
.language-markdown .token.code {
color: #0076ff;
font-weight: normal;
}
.language-markdown .token.list,
.language-markdown .token.hr {
color: #999;
}
.language-markdown .token.url {
color: #ff0078;
font-weight: bolder;
}
.token.selector {
color: #2b91af;
}
.token.property,
.token.entity {
color: #ff0000;
}
.token.attr-name,
.token.regex {
color: #d9931e;
}
.token.directive.tag .tag {
background: #ffff00;
color: #393a34;
}
/* dark */
pre.dark[class*='language-'] {
color: #fafbfc;
}
.language-json .dark .token.boolean {
color: #0076ff;
}
.dark .token.string {
color: #CAFFED;
}
.dark .token.function,
.dark .token.tag,
.dark .token.class-name,
.dark .token.number {
color: #2ba8ff;
}
.dark .token.attr-value,
.dark .token.punctuation,
.dark .token.operator {
color: #efefef;
}
.dark .token.attr-name,
.dark .token.regex {
color: #fac863;
}
.language-json .dark .token.property,
.language-markdown .dark .token.title {
color: #fff;
}
.language-markdown .dark .token.code {
color: #50e3c2;
}
`
