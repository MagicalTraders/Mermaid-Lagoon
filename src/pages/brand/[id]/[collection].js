import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

import Layout from '@/components/shared/Layout';
import Link from '@/components/shared/Link';
import { getACollection, getAllCollectionSlugs } from '@/lib/cms/graphapi/collection';

const Comment = ({ morePosts, post, preview = null }) => {
  const router = useRouter();
  const { collection, id } = router.query;

  return (
    <>

      <Layout>
        <Container>
          <h1>
            Parent:
            {id}
          </h1>
          <h1>
            Collection:
            {collection}
          </h1>
          {post && <Typography component="h1" variant="h1">{post.name}</Typography>}
        </Container>
      </Layout>
    </>
  );
};

export default Comment;

export async function getStaticPaths() {
  const allTerms = await getAllCollectionSlugs();
  return {
    fallback: false,
    paths:    allTerms.collections.map((term) => `/brand/disney/${term.slug}`) || [],
  };
}

export async function getStaticProps({ params, preview = null }) {
  // console.log('params', params);

  const data = await getACollection(params.collection, preview);
  return {
    props: {
      post: {
        ...data?.collections[0],
      },
      preview,
      // morePosts: data?.morePosts,
    },
  };
}
