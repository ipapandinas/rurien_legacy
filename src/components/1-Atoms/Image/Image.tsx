import React from 'react';
import Img from 'gatsby-image';

import { useImageQuery } from '../../../queries';

interface Props {
  alt: string;
  className?: string;
  filename: string;
}

export default function Image({ alt, className, filename }: Props) {
  const data = useImageQuery();

  if (!data) {
    return null;
  }

  const image = data.find(n => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
  return (
    <Img
      alt={alt}
      className={className}
      fluid={image.node.childImageSharp.fluid}
    />
  );
}
