import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _refreBrandData: TBrand = {
  name: 'Refre',
  logoURL: `${BRAND_LOGO_URL_PREFIX}refre_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}17xb1ksPKrRfe1wtRecJwlFu6X22t8HuK`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1AGVgeY_7q-7YpO7a9012bVaEGJWz55EC`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1-1_kZtvXtMAcTO4rzg_vsItO1xI0pBje`,
    },
  ],
};
