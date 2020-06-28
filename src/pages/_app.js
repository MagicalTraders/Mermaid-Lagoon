import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from '../lib/context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const theme = createMuiTheme({
      palette: {
        background: {
          default: '#EEE',
        },
        primary: {
          main: '#673ab7',
        },
      },
    });

    return (
      <>
        <Head>
          <title>Nextjs Minimal App</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Provider>
              <Component {...pageProps} />
            </Provider>
          </CssBaseline>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
