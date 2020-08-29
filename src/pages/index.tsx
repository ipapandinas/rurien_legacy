import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Home } from '../components/4-Pages';
import { useDevice } from '../hooks';
import { appSideMenuToggle } from '../redux';

export default function IndexPage() {
  const { isDesktop, isTabletLandscape } = useDevice();
  const isLaptop = isDesktop || isTabletLandscape;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSideMenuToggle(isLaptop));
  }, [dispatch, isLaptop]);

  return (
    <Layout>
      <SEO title="Inicio" />
      <Home />
    </Layout>
  );
}
