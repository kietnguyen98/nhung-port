import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _hannahOlalaBrandData: TBrand = {
  name: 'Hannah Olala',
  logoURL: `${BRAND_LOGO_URL_PREFIX}hannah_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1I4Vu3oN-oJx54MoNgac_okY67iWMJEzC`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}16vU2bgXyIyQqtPWDrgK9vPNP6p5BoYX5`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CYzjI_V7zgr7oAu4DkdCvfzIrN2HL5KR`,
    },
  ],
};
