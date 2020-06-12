import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

import Layout from '../components/sitewide/Layout';
import { useFetchUser } from '../lib/user';

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container>
        <h1>Next.js and Auth0 Example</h1>

        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component
            for calling extra attention to featured content or information.
          </p>
        </Jumbotron>

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
