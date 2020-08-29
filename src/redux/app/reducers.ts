import { getMediaInfo } from '../../services';

import {
  APP_SIDEMENU_TOGGLE,
  APP_UPDATE_DEVICE,
  AppActionTypes,
  AppState,
} from './types';

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
  isSideMenuOpen: true,
};

export function appReducer(
  state = appDefaultState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case APP_SIDEMENU_TOGGLE: {
      const { value } = action;
      const prevState = state;

      if (value) {
        return {
          ...state,
          isSideMenuOpen: value,
        };
      }

      return {
        ...state,
        isSideMenuOpen: !prevState.isSideMenuOpen,
      };
    }

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
