
export const FONT_FAMILY_SANS =
'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

export const FONT_FAMILY_MONO =
'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'

export const COLOR_ERROR = '#FF001F'
export const COLOR_SUCCESS = '#0076FF'

export const SELECTION_STYLE = `
::selection {
  background-color: #D099FF;
  color: #000;
}
`

export const atomDarkTheme = `

/**
 * atom-dark theme for prism.js
 * Based on Atom's atom-dark theme: https://github.com/atom/atom-dark-syntax
 * @author Joe Gibson (@gibsjose)
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #c5c8c6;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #0F1616;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #7C7C7C;
}

.token.punctuation {
	color: #c5c8c6;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.keyword,
.token.tag {
    color: #96CBFE;
}

.token.class-name {
	color: #FFFFB6;
	text-decoration: underline;
}

.token.boolean,
.token.constant {
    color: #99CC99;
}

.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.number {
	color: #FF73FD;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #A8FF60;
}

.token.variable {
	color: #C6C5FE;
}

.token.operator {
    color: #EDEDED;
}

.token.entity {
    color: #FFFFB6;
    /* text-decoration: underline; */
}

.token.url {
    color: #96CBFE;
}

.language-css .token.string,
.style .token.string {
	color: #87C38A;
}

.token.atrule,
.token.attr-value {
    color: #F9EE98;
}

.token.function {
	color: #DAD085;
}

.token.regex {
    color: #E9C062;
}

.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;


export const a11Theme = `

/**
 * a11y-dark theme for JavaScript, CSS, and HTML
 * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css
 * @author ericwbailey
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	// border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #0F1616;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: 0.1em;
	// border-radius: 0.3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #d4d0ab;
}

.token.punctuation {
	color: #fefefe;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #ffa07a;
}

.token.boolean,
.token.number {
	color: #00e0e0;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #abe338;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #00e0e0;
}

.token.atrule,
.token.attr-value,
.token.function {
	color: #EE91FF;
}

.token.keyword {
	color: #00e0e0;
}

.token.regex,
.token.important {
	color: #EE91FF;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

@media screen and (-ms-high-contrast: active) {
	code[class*="language-"],
	pre[class*="language-"] {
		color: windowText;
		background: window;
	}

	:not(pre) > code[class*="language-"],
	pre[class*="language-"] {
		background: window;
	}

	.token.important {
		background: highlight;
		color: window;
		font-weight: normal;
	}

	.token.atrule,
	.token.attr-value,
	.token.function,
	.token.keyword,
	.token.operator,
	.token.selector {
		font-weight: bold;
	}

	.token.attr-value,
	.token.comment,
	.token.doctype,
	.token.function,
	.token.keyword,
	.token.operator,
	.token.property,
	.token.string {
		color: highlight;
	}

	.token.attr-value,
	.token.url {
		font-weight: normal;
	}
}

`

export const SYNTAX_HIGHLIGHTING_OLD = `
code[class*='language-'],
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
color: #AFFFE5;
}
.token.attr-value,
.token.punctuation {
    color: #BBB;
}
.token.operator {
color: #69D2FF;
}
.token.url,
.token.symbol,
.token.boolean,
.token.variable,
.token.constant,
.token.inserted {
color: #6B37FF;
}
.token.atrule,
.language-autohotkey .token.selector,
.language-json .token.boolean,
code[class*='language-css'] {
font-weight: 600;
}
.language-json .token.boolean {
color: #4200FF;
}
.token.keyword {
color: #00A1E5;
font-weight: bolder;
}
.token.function {
    color: #00F0FF;
}
.token.tag,
.token.class-name,
.token.number {
color: #40FFE8;
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
color: #50e3c2;
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
