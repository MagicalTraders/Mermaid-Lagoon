import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/shared/Layout';
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

const Profile = ({ classes }) => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container className={classes.root}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
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
};

Profile.propTypes = {};
Profile.defaultProps = {};

export default withStyles(styles)(Profile);
