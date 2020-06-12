import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/sitewide/Layout';
import { useFetchUser } from '../lib/user';

export default function About() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container>
        <Row>
          <Col sm={12} lg={8}>
            1 of 3
          </Col>
          <Col sm>2 of 3</Col>
        </Row>

        <h1>About</h1>
        <p>
          This is the about page, navigating between this page and{' '}
          <i>Home</i> is always pretty fast. However, when you navigate to
          the <i>Profile</i> page it takes more time because it uses SSR to
          fetch the user first;
        </p>
      </Container>
    </Layout>
  );
}
