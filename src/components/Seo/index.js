import React from 'react';
import { Helmet } from 'react-helmet';

const titleDefault = 'Biorelate';
const descriptionDefault = 'Biorelate description';

const seoDefault = {
  lang: 'en',
  title: titleDefault,
  description: descriptionDefault,
  keywords: [],

  openGraph: {
    title: titleDefault,
    description: descriptionDefault,
    type: 'website',
  },
};

// eslint-disable-next-line react/prop-types
const Seo = ({ children, ...seoProps }) => {
  const {
    location: { href: fullUrl },
  } = window;
  const { openGraph, ...restSeo } = seoProps;
  const metaData = {
    ...seoDefault,
    ...restSeo,
    openGraph: {
      ...seoDefault.openGraph,
      url: fullUrl,
      title: seoProps.openGraph?.title || seoProps.title || seoDefault.openGraph.title,
      description: seoProps.openGraph?.description || seoProps.description || seoDefault.openGraph.description,
    },
  };

  return (
    <Helmet titleTemplate={`Biorelate: ${metaData.title}`}>
      <html lang={metaData.lang} />

      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords.join(',')} />
      <meta itemProp="name" content={metaData.title} />
      <meta itemProp="description" content={metaData.description} />
      <meta property="og:url" content={metaData.openGraph.url} />
      <meta property="og:type" content={metaData.openGraph.type} />
      <meta property="og:title" content={metaData.openGraph.title} />
      <meta property="og:description" content={metaData.openGraph.description} />

      {children}
    </Helmet>
  );
};

export default Seo;
