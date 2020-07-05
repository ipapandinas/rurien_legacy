import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { identity } from '../services';

export default function useApp(selector = identity) {
  return useSelector((state: RootState) => selector(state.app));
}
