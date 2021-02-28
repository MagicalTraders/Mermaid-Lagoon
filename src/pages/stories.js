import React from 'react';

import { Container, Typography } from '@material-ui/core';
import Link from 'next/link';

import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';
import { getAllStories } from '@/lib/cms/graphapi/story';

const Stories = ({ allTerms, preview }) => (
  <Layout>
    <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc' }}>
      stories

      {allTerms.map((term, i) => (
        <p key={term.slug}><Link href={`/story/${term.slug}`}>{term.name}</Link></p>
      ))}

    </Container>
  </Layout>
);

export default Stories;

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articles, categories, homepage] = await Promise.all([
//     fetchAPI("/stories?status=published"),
//     fetchAPI("/categories"),
//     fetchAPI("/homepage"),
//   ]);

//   return {
//     props: { articles, categories, homepage },
//     revalidate: 1,
//   };
// }

export const getStaticProps = async ({ preview = null }) => {
  const allTerms = (await getAllStories(preview)) || [];
  // console.log(allTerms)
  return {
    props: { allTerms, preview },
  };
};
