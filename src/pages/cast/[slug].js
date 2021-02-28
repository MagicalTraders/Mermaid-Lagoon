/**
 * Page type: Tax Term
 */
import React from 'react';

import { Container, Typography, Grid } from '@material-ui/core';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '@/components/shared/Layout';
import { getACast, getAllCastSlugs } from '@/lib/cms/graphapi/cast';
import Related from '@/components/pages/product/Related';
export default function Post({ morePosts, post, preview = null }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    name, products, stories,
  } = post;

  console.log('products', products);

  return (
    <Layout preview={preview}>
      <Container maxWidth="lg" style={{ marginTop: 35 }}>

        {name && <Typography component="h1" variant="h1" gutterBottom>{name}</Typography>}

        <If condition={Array.isArray(stories) && stories.length}>
          <Grid container>
            <Grid xs={1} item>
              Stories
            </Grid>
            {post.stories.map((term, i) => (
              <Grid xs={2} item>
                <Link href={`/story/${term.slug}`} key={i}>{term.name}</Link>
              </Grid>
            ))}
          </Grid>

          <If condition={Array.isArray(stories[0].cast) && stories[0].cast.length}>
            <Related chipData={stories[0].cast} label="Costarting Cast" />
          </If>
        </If>


        <h1>Products</h1>
        <Choose>
          <When condition={Array.isArray(products) && products.length}>
            <Grid container>
              {products.map((term, i) => (
                <Grid xs={3} item>
                  <Link alt={term.name} href={`/${term.slug}`} key={i}>
                    <Image
                      alt="Picture of the author"
                      height={500}
                      src={term.pdps[0].photos[0].url}
                      width={500}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </When>
          <Otherwise>
            <span>Yikes! We didnt find anything.</span>
          </Otherwise>
        </Choose>


      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getACast(params.slug, preview);
  // const content = await markdownToHtml(data?.posts[0]?.content || '')
  console.log(data);

  return {
    props: {
      post: {
        ...data?.casts[0],
      },
      preview,
      // morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allTerms = await getAllCastSlugs();
  return {
    fallback: true,
    paths:    allTerms.casts.map((term) => `/cast/${term.slug}`) || [],
  };
}
