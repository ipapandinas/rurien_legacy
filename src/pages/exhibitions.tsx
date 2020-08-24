import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Exhibitions } from '../components/4-Pages';
import { appSideMenuToggle } from '../redux';

const ExhibitionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSideMenuToggle(false));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Expos" />
      <Exhibitions />
    </Layout>
  );
};

export default ExhibitionsPage;
