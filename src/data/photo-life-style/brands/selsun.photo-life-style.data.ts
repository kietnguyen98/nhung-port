import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _selsunBrandData: TBrand = {
  name: 'Selsun',
  logoURL: `${BRAND_LOGO_URL_PREFIX}selsun_logo.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1pw-EyxS-UNeQCmzH_rlO7wL99wPK9C1I`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}188whYrfWnrOp13QCmU8c1O4DK8v2_xnl`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1OxpSHX88Vi6GcRSs_PCSshGVXeTU401b`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1rF7SLFkUhgUNnEb3n98Vo50PNVYHnhdx`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1sqsyT3GznwOtmCA50wv-eDgVT7DrgY-Q`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1N43eXne3Agsobus3akPNN6U1sHCWr2os`,
    },
  ],
};
