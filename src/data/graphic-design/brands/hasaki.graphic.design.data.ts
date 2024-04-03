import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _hasakiBrandData: TBrand = {
  name: 'Hasaki',
  logoURL: `${BRAND_LOGO_URL_PREFIX}hasaki_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1S3fed_E-IZ-wPwMw9u4ITsx3-_5b1jWV`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1e6YLhrZLBP2DzwN2FzN_ymHF3gK_kdOs`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}15Si53srdS8fkHxZDisNAcZzaA1pMSD5p`,
    },
  ],
};
