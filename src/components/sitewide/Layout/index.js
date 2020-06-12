import React from 'react';
import Head from 'next/head';

import PageHeader from '../PageHeader';
import { UserProvider } from '../../../lib/user';

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>Next.js with Auth0</title>
    </Head>

    <PageHeader />

    <main>{children}</main>

    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, 'Segoe UI';
      }
    `}</style>
  </UserProvider>
);

export default Layout;
