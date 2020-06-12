import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
} from 'react-bootstrap';
import {
  JSONLD,
  Product,
  AggregateRating,
  GenericCollection,
  Review,
  Location,
  Rating,
  Author,
} from 'react-structured-data';

import Layout from '../../components/sitewide/Layout';
import { useFetchUser } from '../../lib/user';
import styles from './pdp.module.scss';

export default function About() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container className={styles.wrapper}>
        <h1 className={styles.productName}>
          Product Name Goes Here Here Here
        </h1>
        <Row>
          <Col sm={12} lg={9}>
            <div className={styles.box}>
              <Row>
                <Col sm={12} lg={7}>
                  <Image
                    src="https://picsum.photos/225/265"
                    className={styles.pdpPhoto}
                    rounded
                  />
                  <Image
                    src="https://picsum.photos/225/265"
                    className={styles.pdpPhoto}
                    rounded
                  />
                  <Image
                    src="https://picsum.photos/225/265"
                    className={styles.pdpPhoto}
                    rounded
                  />
                </Col>
                <Col sm>
                  <p className={styles.pdpDesc}>
                    Hi Im bob. I am user experience and user interface
                    designer. I have been working on UI & UX since last 10
                    years.
                  </p>

                  <ListGroup className={styles.listGroup}>
                    <ListGroup.Item>
                      <strong>Cast</strong> Cras justo odio
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Cast</strong> Dapibus ac facilisis in
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Cast</strong> Morbi leo risus
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Cast</strong> Porta ac consectetur ac
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Cast</strong> Vestibulum at eros
                    </ListGroup.Item>
                  </ListGroup>

                  <div className={styles.pdpLink}>
                    <Card.Body>
                      <Card.Title>Find It At</Card.Title>
                      <Button variant="primary" size="lg">
                        BoxLunch
                      </Button>
                    </Card.Body>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm>
            <Card>
              <Card.Header as="h5">Related Products</Card.Header>
              <Card.Body className={styles.pdpRelatedCard}>
                <Card.Title>Special title treatment</Card.Title>
                <Row>
                  <Col lg={5}>
                    <Image src="https://picsum.photos/70/70" rounded />
                  </Col>
                  <Col lg className={styles.pdpRelatedCopy}>
                    <span>Dapibusfzjknds nkjv ac facilisis in</span>
                  </Col>
                </Row>
              </Card.Body>

              <Card.Body className={styles.pdpRelatedCard}>
                <Card.Title>Special title treatment</Card.Title>
                <Row>
                  <Col lg={5}>
                    <Image src="https://picsum.photos/70/70" rounded />
                  </Col>
                  <Col lg className={styles.pdpRelatedCopy}>
                    <span>Dapibusfzjknds nkjv ac facilisis in</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <JSONLD>
        <Product name="Product Name">
          <AggregateRating ratingValue={4.3} reviewCount={197} />
          <GenericCollection type="review">
            <Review
              name="It's awesome"
              reviewBody="This is Great! My family loves it"
              datePublished="11/22/1963"
            >
              <Author name="Jerry" />
              <Location name="Chicago, IL" />
              <Rating ratingValue={5} />
            </Review>
            <Review
              name="Very cool"
              reviewBody="I like this a lot. Very cool product"
              datePublished="11/22/1963"
            >
              <Author name="Cool Carl" />
              <Location name="Chicago, IL" />
              <Rating ratingValue={4} />
            </Review>
          </GenericCollection>
        </Product>
      </JSONLD>
    </Layout>
  );
}
