import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/shared/Layout';
import withAuth from '../components/helpers/WithAuth';

const Profile = ({ user }) => (
  <Layout user={user}>
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Profile (SSR)
      </Typography>

      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Container>
  </Layout>
);

export default withAuth(Profile);
