import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _lipOnLipBrandData: TBrand = {
  name: 'Lip On Lip',
  logoURL: `${BRAND_LOGO_URL_PREFIX}LOL_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '12DXuTTr2u2CEB9paGIK8qV4krGKVdgys'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}12DXuTTr2u2CEB9paGIK8qV4krGKVdgys`,
    },
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1z4ivYH42c3o4wMQj9JrY2UJ9Lw4xBoFs'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1z4ivYH42c3o4wMQj9JrY2UJ9Lw4xBoFs`,
    },
  ],
};
