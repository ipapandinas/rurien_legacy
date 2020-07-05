import { APP_UPDATE_DEVICE } from './types';

export function appUpdateDevice(media: string) {
  return {
    media,
    type: APP_UPDATE_DEVICE,
  };
}
