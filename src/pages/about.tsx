import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { About } from '../components/4-Pages';
import { appSideMenuToggle } from '../redux';

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSideMenuToggle(false));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Sobre Mí" />
      <About />
    </Layout>
  );
};

export default AboutPage;
