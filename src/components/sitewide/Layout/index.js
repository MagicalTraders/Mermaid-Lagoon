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
      footer {
        height: 100px;
        display: block;
        text-align: center;
        background-color: #333;
        color: #fefefe;
      }
      footer a,
      footer a:hover {
             color: #fefefe;
      }
      footer span {
        display: inline-block;
        margin-top: 25px;
      }
      footer svg {
        max-height: 35px;
        max-width: 35px;
        margin-left: 10px;
      }
    `}</style>
    <footer>
      <a href="https://www.vercel.com"><span>Powered By</span><span> <svg height="90" viewBox="0 0 75 65" fill="#fff">
        <path d="M37.59.25l36.95 64H.64l36.95-64z" />
      </svg></span></a>
    </footer>
  </UserProvider>
);

export default Layout;
