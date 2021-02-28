import React, { useEffect } from 'react';

import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import PropTypes from 'prop-types';

import SEO from '../../next-seo.config';

const MyApp = ({ Component, pageProps }) => {
  // If you've used `withAuth`, pageProps.user can pre-populate the hook
  // if you haven't used `withAuth`, pageProps.user is undefined so the hook
  // fetches the user from the API routes
  const { user } = pageProps;
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>

      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
