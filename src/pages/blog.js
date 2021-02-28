import React from 'react';

import Articles from '@/components/pages/Articles';
import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';

const Home = ({ articles, categories, homepage }) => (
  <Layout categories={categories}>
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>{homepage.hero.title}</h1>
        <Articles articles={articles} />
      </div>
    </div>
  </Layout>
);

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  return {
    props:      { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
