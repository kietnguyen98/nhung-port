import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _sunplayBrandData: TBrand = {
  name: 'Sunplay',
  logoURL: `${BRAND_LOGO_URL_PREFIX}skin_aqua.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1wy303G6hR9a7TMVLQp1RuD7T4fQ9_SsR'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1wy303G6hR9a7TMVLQp1RuD7T4fQ9_SsR`,
    },
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1Jh5bkXdXDXcYDBcGQoFaePcuMiDUXK8A'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1Jh5bkXdXDXcYDBcGQoFaePcuMiDUXK8A`,
    },
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
    },
  ],
};
