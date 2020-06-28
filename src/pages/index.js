import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/shared/Layout';
import Link from '../components/shared/Link';
import { useFetchUser } from '../lib/user';

export default function Index() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js and Auth0 Example
        </Typography>

        {loading && <p>Loading login info...</p>}

        {!loading && !user && (
          <>
            <p>
              To test the login click in <i>Login</i>
            </p>
            <p>
              Once you have logged in you should be able to click in{' '}
              <i>Profile</i> and <i>Logout</i>
            </p>
            <p>
              <Link href="/about" color="secondary">
                Go to the about page
              </Link>
            </p>
          </>
        )}
        {user && (
          <>
            <h4>Rendered user info on the client</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
      </Container>
    </Layout>
  );
}
