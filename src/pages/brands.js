import React from 'react';

import Link from 'next/link';

import Articles from '@/components/pages/Articles';
import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';
import { getAllBrands } from '@/lib/cms/graphapi/brand';

const Brands = ({ allTerms, preview }) => (
  <Layout>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        stories

        {allTerms.map((term, i) => (
          <>
            <Link href={`/brand/${term.slug}`} key={term.slug}>{term.name}</Link>
            <br />
          </>
        ))}

      </div>
    </div>
  </Layout>
);

export default Brands;

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
  const allTerms = (await getAllBrands(preview)) || [];
  // console.log(allTerms)
  return {
    props: { allTerms, preview },
  };
};
