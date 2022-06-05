import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
          <style
            dangerouslySetInnerHTML={{
              __html: ` 
                  body {
                      font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                      background-image: radial-gradient(#C1C1C1 0%, transparent 20%), radial-gradient(#C1C1C1 0%, transparent 20%);
                      background-color: #FFFFFF;
                      background-position: 0 0, 10px 10px;
                      background-size: 10px 10px;
                      width: 100%;
                      height: 100%;
                      padding: 0px;
                      margin: 0px;
                  }
              `,
            }}
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
