import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Noto+Serif+KR:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
          <link
            rel="manifest"
            href="/manifest.json"
          />
          <link
            rel="apple-touch-icon"
            href="/icon-192x192.png"
          />
          <meta
            name="theme-color"
            content="#fff"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
