import React from 'react';

import Link from 'next/link';

import Articles from '@/components/pages/Articles';
import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';
import { getAllProducts } from '@/lib/cms/graphapi/product';

const Products = ({ allTerms, preview }) => (
  <Layout>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        stories

        {allTerms.map((term, i) => (
          <p key={term.slug}>
            <Link href={`/${term.slug}`}>{term.name}</Link>
          </p>
        ))}

      </div>
    </div>
  </Layout>
);

export default Products;

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
  const allTerms = (await getAllProducts(preview)) || [];
  // console.log(allTerms)
  return {
    props: { allTerms, preview },
  };
};
