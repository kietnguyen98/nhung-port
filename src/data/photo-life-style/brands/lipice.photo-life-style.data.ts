import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceBrandData: TBrand = {
  name: 'Lipice',
  logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1GXEUukbICFZkj-ciZWL-cjX63Boo_NgH`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}15V-9-NCwviqRAluv_lnEbzG132wO_I4V`,
    },
  ],
};
