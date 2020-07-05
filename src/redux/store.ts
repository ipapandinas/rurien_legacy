import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appDefaultState, appReducer } from './app/reducers';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

// If many reducers, use combineReducers from 'redux'
const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const initialState: RootState = {
  app: appDefaultState,
};

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = reduxCreateStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleWareEnhancer)
);

export { store };
