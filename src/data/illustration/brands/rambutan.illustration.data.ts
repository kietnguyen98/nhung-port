import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _rambutanBrandData: TBrand = {
  name: 'Rambutan',
  logoURL: '',
  demoPosts: [
    // logo
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1a7rz6bjtlLrAGig847CJh-IKXDGyD-4L`,
    },
  ],
  posts: [
    // other photos
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1lo_W4Y_9Ki6Qi3PWHZuk8UJt2la_oh5t`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1uFVYOJS1mI7R16sNKN3IxoJgx8UQ4-ci`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1nawoPvVIFmOwGpUqbOgs5u3EMEyAdi7Q`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1L75tWg73mwabxUuKOQbj_DP0CMZqNr-i`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}156RWOnrjv_CtWuQWxT7SXWe0-B4-5KmM`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1sPgA1aUCNvL4OzcuorvBfQUa27iFMdcP`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1yLRhVLqlxaWzLFMqqr0oig8-1TNCjsSL`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1rsqQ85gphuvG-rwgQh4MTrFZGOAqJHIy`,
    },
  ],
};
