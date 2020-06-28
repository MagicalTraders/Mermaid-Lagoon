import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/shared/Layout';
import Link from '../components/shared/Link';
import { useFetchUser } from '../lib/user';

const styles = ({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
});

const Homepage = ({ classes }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container className={classes.root}>
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
};

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default withStyles(styles)(Homepage);
