import React from 'react';

import {
  CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Router from 'next/router';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import theme from '@/lib/mui/theme';

// Track client-side page views with Segment
Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url);
});

const useStyles = makeStyles((theme) => ({
  body: {
    display:       'flex',
    flexDirection: 'column',
    height:        '100%',
  },
  main: {
    flexGrow: 1,
    // flexShrink: 0
  },
  paper: {
    color:     'white',
    padding:   theme.spacing(2),
    textAlign: 'center',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.body}>
          <Header />

          <main className={classes.main}>
            <div className="container">{children}</div>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
