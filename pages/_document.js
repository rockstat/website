import { Html, Head, Main, NextScript } from 'next/document';

const domain = 'rock.st';
const defaultDescription = 'Открытая платформа для создания собственной аналитической системы и управления жизненным циклом пользователей';
const defaultOGURL = `https://${domain}`;
const defaultOGImage = `${defaultOGURL}/static/images/social/electric-star.png`;

export default function MyDocument() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="wr0zLRd7fmllQM2f5RoEqAf4JaBoO7xwey546hutiQw" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:image" content={defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={defaultDescription} />
        <script type="text/javascript" src="https://bolt.rstat.org/public/box-rst.js" async />
        <link rel="stylesheet" type="text/css" href="/static/nprogress/nprogress.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
