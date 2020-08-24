// Redux Types
// app's slice of state

interface Device {
  isAny: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isMobileXs: boolean;
  isMobileSm: boolean;
  isTablet: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
}

export interface AppState {
  device: Device;
  isSideMenuOpen: boolean;
}

// Actions names
export const APP_SIDEMENU_TOGGLE = 'APP_SIDEMENU_TOGGLE';
export const APP_UPDATE_DEVICE = 'APP_UPDATE_DEVICE';

// Actions interfaces
interface SideMenuToggle {
  type: typeof APP_SIDEMENU_TOGGLE;
  value: boolean | undefined;
}
interface UpdateDevice {
  type: typeof APP_UPDATE_DEVICE;
  media: string;
}

export type AppActionTypes = SideMenuToggle | UpdateDevice;
