import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipOnLipBrandData: TBrand = {
  name: 'Lip On Lip',
  logoURL: `${BRAND_LOGO_URL_PREFIX}LOL_logo.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1kQ_8X5-lVVw6wP52-YaoeCOt-_oMjD72`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1WA5ngHq8n9DIVgZv14iX15HIBTZXcYqT`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1d52vOsrv2J-ut21DG7gKxOvJBQNKVo_K`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1jxV_CuH23sSnUSD4OxABoDMD7ZCbdQdu`,
    },
  ],
};
