import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { appUpdateDevice } from '../../../redux';
import { getMedia } from '../../../services';

export default function Resize() {
  const dispatch = useDispatch();

  useEffect(() => {
    function updateMedia() {
      const media = getMedia();
      dispatch(appUpdateDevice(media));
    }

    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  }, [dispatch]);

  return null;
}
