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
}

// Actions names
export const APP_UPDATE_DEVICE = 'APP_UPDATE_DEVICE';

// Actions interfaces
interface UpdateDevice {
  type: typeof APP_UPDATE_DEVICE;
  media: string;
}

export type AppActionTypes = UpdateDevice;
