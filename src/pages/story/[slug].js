/**
 * Page type: Tax Term
 */
import React from 'react';

import { Container, Typography, Grid } from '@material-ui/core';
import ErrorPage from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '@/components/shared/Layout';
import { getAStory, getAllStorySlugs } from '@/lib/cms/graphapi/story';

export default function Post({ morePosts, post, preview = null }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const {
    cast, name,
  } = post;

  return (
    <Layout preview={preview}>
      <Container maxWidth="lg" style={{ marginTop: 35 }}>
        {name && <Typography component="h1" variant="h1" gutterBottom>{name}</Typography>}

        <If condition={Array.isArray(cast) && cast.length}>
          <Grid container>
            <Grid xs={1} item>
              Cast
            </Grid>
            {post.cast.map((term, i) => (
              <Grid xs={1} item key={i}>
                <Link href={`/cast/${term.slug}`} key={i}>{term.name}</Link>
              </Grid>
            ))}
          </Grid>
        </If>

      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getAStory(params.slug, preview);
  return {
    props: {
      post: {
        ...data?.stories[0],
      },
      preview,
      // morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allTerms = await getAllStorySlugs();
  return {
    fallback: false,
    paths:    allTerms.stories.map((term) => `/story/${term.slug}`) || [],
  };
}
