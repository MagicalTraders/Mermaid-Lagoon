import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

import Layout from '@/components/shared/Layout';
import Link from '@/components/shared/Link';
import { getABrand, getAllBrandSlugs } from '@/lib/cms/graphapi/brand';

const Post = ({ morePosts, post, preview = null }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
        <Container>
          {post && <Typography component="h1" variant="h1">{post.name}</Typography>}

          {post && post.collections.map((term, i) => (
            <p key={i}>
              <Link href="/brand/[id]/[collection]" href={`/brand/${id}/${term.slug}`}>{term.name}</Link>
            </p>
          ))}

        </Container>
      </Layout>

    </>
  );
};

export default Post;

export async function getStaticProps({ params, preview = null }) {
  const data = await getABrand(params.id, preview);
  // const content = await markdownToHtml(data?.posts[0]?.content || '')

  return {
    props: {
      post: {
        ...data?.brands[0],
      },
      preview,
      // morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allTerms = await getAllBrandSlugs();
  return {
    fallback: true,
    paths:    allTerms.brands.map((term) => `/brand/${term.slug}`) || [],
  };
}
