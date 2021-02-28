import React from 'react';

import { Container, Typography } from '@material-ui/core';

import Layout from '@/components/shared/Layout';
import Link from '@/components/shared/Link';
import { fetchAPI } from '@/lib/cms/api';
import { getAllCast } from '@/lib/cms/graphapi/cast';

const Cast = ({ allTerms, preview }) => (
  <Layout>
    <Container maxWidth="lg">
      cast

      <Typography variant="h2">Pixar</Typography>
      {allTerms.map((term, i) => (
        <>
          <Link href={`/cast/${term.slug}`} key={term.slug}>{term.name}</Link>
          <br />
        </>
      ))}

    </Container>
  </Layout>
);

export default Cast;

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
  const allTerms = (await getAllCast(preview)) || [];
  // console.log(allTerms)
  return {
    props: { allTerms, preview },
  };
};
