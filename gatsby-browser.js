import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

export const wrapPageElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
