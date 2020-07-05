import { getMediaInfo } from '../../services';

import { APP_UPDATE_DEVICE, AppActionTypes, AppState } from './types';

export const appDefaultState = {
  device: {
    isAny: false,
    isDesktop: false,
    isMobile: false,
    isMobileXs: false,
    isMobileSm: false,
    isTablet: false,
    isTabletPortrait: false,
    isTabletLandscape: false,
  },
};

export function appReducer(
  state = appDefaultState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case APP_UPDATE_DEVICE: {
      const { media } = action;

      return {
        ...state,
        device: getMediaInfo(media),
      };
    }

    default:
      return state;
  }
}
