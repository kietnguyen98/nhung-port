import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _mMusicRecordBrandData: TBrand = {
  name: 'MmusicRecord',
  logoURL: `${BRAND_LOGO_URL_PREFIX}mmusic_record.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1835ZWkODZ4BI74IrK4VVl2ueZ85Sl5M4`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1Vpt9azhqu2B0E7grKo_VBvcHE6t0r-PI`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1N2hHVEPNT2uIQtTzCxpLwPE09PUqddQY`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1QfctZKn9g14rRaxM-jmqfXtwwKOn_mYu`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1cZI6zlCp621KbTQrwkczO_5K_ZWCNKKf`,
    },
  ],
};
