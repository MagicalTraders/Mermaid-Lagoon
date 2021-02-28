import React from 'react';

import Link from 'next/link';

import Image from '@/components/pages/Image';

const Card = ({ article }) => (
  <Link as={`/article/${article.slug}`} href="/article/[id]">
    <a className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Image image={article.image} />
        </div>
        <div className="uk-card-body">
          <p className="uk-text-uppercase" id="category">
            {article.category.name}
          </p>
          <p className="uk-text-large" id="title">
            {article.title}
          </p>
        </div>
      </div>
    </a>
  </Link>
);

export default Card;
