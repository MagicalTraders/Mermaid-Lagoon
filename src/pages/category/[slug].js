import React from 'react';

import Articles from '@/components/pages/Articles';
import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';

const Category = ({ categories, category }) => {
  const seo = {
    metaDescription: `All ${category.name} articles`,
    metaTitle:       category.name,
  };

  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles articles={category.articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI('/categories');

  return {
    fallback: false,
    paths:    categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI('/categories');

  return {
    props:      { categories, category },
    revalidate: 1,
  };
}

export default Category;
