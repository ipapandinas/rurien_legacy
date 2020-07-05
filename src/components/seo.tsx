import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';

import favicon from '../assets/images/icon.png';
import { useSiteMetadata } from '../queries';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export default function SEO({ description, lang, meta = [], title }: Props) {
  const { pathname } = useLocation();
  const {
    author,
    defaultDescription,
    defaultImage,
    defaultTitle,
    titleTemplate,
    siteUrl,
  } = useSiteMetadata();

  const metaDescription = description || defaultDescription;
  const metaImage = `${siteUrl}${defaultImage}`;
  const metaTitle = title || defaultTitle;
  const metaUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
      link={[
        { key: 'icon', rel: 'icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
  );
}
