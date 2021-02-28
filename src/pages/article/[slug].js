import React from 'react';

import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

import Image from '@/components/pages/Image';
import Layout from '@/components/shared/Layout';
import { fetchAPI } from '@/lib/cms/api';
import { getStrapiMedia } from '@/lib/cms/media';

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    article:         true,
    metaDescription: article.description,
    metaTitle:       article.title,
    shareImage:      article.image,
  };

  return (
    <Layout categories={categories}>
      <div
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        id="banner"
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown escapeHtml={false} source={article.content} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.author.picture && (
                <Image
                  image={article.author.picture}
                  style={{
                    borderRadius: '50%',
                    height:       30,
                    position:     'static',
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By
                {' '}
                {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    fallback: false,
    paths:    articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`,
  );
  const categories = await fetchAPI('/categories');

  return {
    props:      { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
