import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../../components/shared/Layout';
import Link from '../../components/shared/Link';
import { useFetchUser } from '../../lib/user';

export default function About() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <p>
          This is the about page, navigating between this page and{' '}
          <i>Home</i> is always pretty fast. However, when you navigate to
          the <i>Profile</i> page it takes more time because it uses SSR to
          fetch the user first;
        </p>
        <p>
          <Link href="/" color="primary">
            Go to the home page
          </Link>
        </p>
      </Container>
    </Layout>
  );
}
