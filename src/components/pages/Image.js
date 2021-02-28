import React from 'react';

import Image from 'next/image';

import { getStrapiMedia } from '@/lib/cms/media';

const ImageWrapper = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      alt={image.alternativeText || image.name}
      height={400}
      src={imageUrl}
      style={style}
      width={1200}
    />
  );
};

export default ImageWrapper;
