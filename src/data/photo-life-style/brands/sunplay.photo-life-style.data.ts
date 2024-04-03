import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _sunplayBrandData: TBrand = {
  name: 'Sunplay',
  logoURL: `${BRAND_LOGO_URL_PREFIX}sunplay_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}10sxloLFo0_hOgQunwMJJs951OKTE7t53`,
    },
  ],
};
