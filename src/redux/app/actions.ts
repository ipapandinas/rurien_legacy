import { APP_SIDEMENU_TOGGLE, APP_UPDATE_DEVICE } from './types';

export function appSideMenuToggle(value: boolean | undefined = undefined) {
  return {
    type: APP_SIDEMENU_TOGGLE,
    value,
  };
}

export function appUpdateDevice(media: string) {
  return {
    media,
    type: APP_UPDATE_DEVICE,
  };
}
