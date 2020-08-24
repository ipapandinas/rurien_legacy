import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Work } from '../components/4-Pages';
import { appSideMenuToggle } from '../redux';

const WorkPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSideMenuToggle(false));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Obras" />
      <Work />
    </Layout>
  );
};

export default WorkPage;
