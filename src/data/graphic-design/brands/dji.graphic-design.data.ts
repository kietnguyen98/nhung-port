import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _DJIBrandData: TBrand = {
  name: 'DJI',
  logoURL: `${BRAND_LOGO_URL_PREFIX}dji_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1USdbYbxvz5_b5tcDQWL9rBdnYmKJJ2Or`,
    },
  ],
};
