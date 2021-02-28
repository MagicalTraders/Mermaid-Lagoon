import React from 'react';

import {
  CssBaseline,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import Router from 'next/router';

import Header from '@/components/shared/Header';
import theme from '@/lib/mui/theme';

// Track client-side page views with Segment
Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <main>
        <div className="container">{children}</div>
      </main>
    </ThemeProvider>
  </>
);

export default Layout;
