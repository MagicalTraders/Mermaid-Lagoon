import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { useFetchUser } from '../lib/user';
import Layout from '../components/shared/Layout';
import withAuth from '../components/helpers/WithAuth';

export function ProtectedPage() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Protected Page
        </Typography>

        {loading && <p>Loading profile...</p>}

        {!loading && user && (
          <>
            <p>Profile:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default withAuth(ProtectedPage);
