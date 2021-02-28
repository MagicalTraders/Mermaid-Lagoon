import React from 'react';

import {
  Container, Typography, Grid, Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Related from '@/components/pages/product/Related';
import ThumbCard from '@/components/pages/product/ThumbCard';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Layout from '@/components/shared/Layout';
// import Link from '@/components/shared/Link';
import { getAProduct, getAllProductSlugs } from '@/lib/cms/graphapi/product';

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld

import styles from './pdp.module.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    color:     theme.palette.text.secondary,
    padding:   theme.spacing(2),
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));

const Comment = ({ morePosts, post, preview = null }) => {
  const router = useRouter();
  const { comment, product } = router.query;
  const classes = useStyles();

  const RelatedChips = ({ postData }) => {
    const {
      attractions, cast, chapters, destinations, entertainment, events,
      food_services, locations, lodgings, stories, tags, taxterms,
    } = postData;

    return (
      <>
        <If condition={Array.isArray(cast) && cast.length}>
          <Related chipData={cast} label="Cast" />
        </If>
        <If condition={Array.isArray(stories) && stories.length}>
          <Related chipData={stories} label="Stories" />
        </If>
        <If condition={Array.isArray(chapters) && chapters.length}>
          <Related chipData={chapters} label="Story Chapters" />
        </If>
        <Divider />
        <If condition={Array.isArray(attractions) && attractions.length}>
          <Related chipData={attractions} label="attractions" />
        </If>
        <If condition={Array.isArray(destinations) && destinations.length}>
          <Related chipData={destinations} label="destinations" />
        </If>
        <If condition={Array.isArray(entertainment) && entertainment.length}>
          <Related chipData={entertainment} label="entertainment" />
        </If>
        <If condition={Array.isArray(events) && events.length}>
          <Related chipData={events} label="Cast" />
        </If>
        <If condition={Array.isArray(food_services) && food_services.length}>
          <Related chipData={food_services} label="food_services" />
        </If>
        <If condition={Array.isArray(locations) && locations.length}>
          <Related chipData={locations} label="locations" />
        </If>
        <If condition={Array.isArray(lodgings) && lodgings.length}>
          <Related chipData={lodgings} label="lodgings" />
        </If>
        <If condition={Array.isArray(tags) && tags.length}>
          <Related chipData={tags} label="tags" />
        </If>
        <If condition={Array.isArray(taxterms) && taxterms.length}>
          <Related chipData={taxterms} label="taxterms" />
        </If>
      </>
    );
  };

  return (
    <>
      <NextSeo
        canonical="https://www.canonicalurl.ie/"
        description="This will be the page meta description"
        openGraph={{
          description: 'Open Graph Description',
          images:      [
            {
              alt:    'Og Image Alt',
              height: 600,
              url:    'https://www.example.ie/og-image-01.jpg',
              width:  800,
            },
            {
              alt:    'Og Image Alt Second',
              height: 800,
              url:    'https://www.example.ie/og-image-02.jpg',
              width:  900,
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          title: 'Open Graph Title',
          url:   'https://www.canonicalurl.ie/',
        }}
        title="Page Meta Title"
      />

      <ArticleJsonLd
        authorName="Jane Blogs"
        dateModified="2015-02-05T09:00:00+08:00"
        datePublished="2015-02-05T08:00:00+08:00"
        description="This is a mighty good description of this article."
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        publisherLogo="https://www.example.com/photos/logo.jpg"
        publisherName="Mary Blogs"
        title="Article headline"
        url="https://example.com/article"
      />

      <Layout>
        <Container maxWidth="lg" style={{ marginTop: '50px' }}>
          <Breadcrumbs />

          <Grid spacing={6} container>
            <Grid xs={5} item>
              <Grid spacing={1} container>
                {post && post.pdps.map((term, i) => (
                  <>
                    {term.photos.map((photos, i) => (
                      <Grid xs={6} item>
                        <Image
                          alt="Picture of the author"
                          height={300}
                          key={i}
                          src={photos.url}
                          width={300}
                        />
                      </Grid>
                    ))}
                  </>
                ))}
              </Grid>
            </Grid>

            <Grid item xs>
              {post && <Typography component="h1" variant="h3" gutterBottom>{post.name}</Typography>}
              <p className={styles.pdpPhoto}>JSON-LD</p>

              {post && post.pdps.map((term, i) => (
                <>
                  <p key={i}>
                    {term.desc_full}
                  </p>

                </>
              ))}
              <RelatedChips postData={post} />
            </Grid>
          </Grid>

        </Container>
      </Layout>
    </>
  );
};

export default Comment;

export async function getStaticPaths() {
  const allTerms = await getAllProductSlugs();
  return {
    fallback: true,
    paths:    allTerms.products.map((term) => `/${term.slug}`) || [],
  };
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getAProduct(params.product, preview);
  // console.log('data', data);

  return {
    props: {
      post: {
        ...data?.products[0],
      },
      preview,
      // morePosts: data?.morePosts,
    },
  };
}
