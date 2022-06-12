import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = '가영아 노래 불러줘'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

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
            name='application-name'
            content={APP_NAME}
          />
          <meta
            name='apple-mobile-web-app-capable'
            content='yes'
          />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta
            name='apple-mobile-web-app-title'
            content={APP_NAME}
          />
          <meta
            name='mobile-web-app-capable'
            content='yes'
          />
          <meta
            name='theme-color'
            content='#d75d73'
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
