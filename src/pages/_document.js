import React, { Fragment } from 'react';
import { ServerStyleSheets } from '@material-ui/styles';

/**
 * Customizing Document
 *
 * A custom Document is commonly used to augment your application's
 * <html> and <body> tags. This is necessary because Next.js pages skip
 * the definition of the surrounding document's markup.
 *
 * A custom Document can also include getInitialProps for expressing
 * asynchronous server-rendering data requirements.
 *
 * Common errors include adding a <title> in the <Head /> tag or using styled-jsx.
 * These should be avoided in pages/_document.js as they cause unexpected behavior.
 *
 * <Html>, <Head />, <Main /> and <NextScript /> are required.
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  /**
   * Customizing renderPage
   * Takes as argument an options object for further customization
   *
   * It should be noted that the only reason you should be customizing renderPage
   * is for usage with css-in-js libraries that need to wrap the application to
   * properly work with server-side rendering.
   */
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    //
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </Fragment>,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#673ab7" />
          <meta name="Description" content="an example of NextJS app" />
          <link rel="manifest" href="public/manifest.json" />
          <link rel="icon" href="public/img/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
