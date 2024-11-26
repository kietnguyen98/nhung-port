import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _huongNghiepDayNgheBrandData: TBrand = {
  name: 'Huong Nghiep Day Nghe',
  logoURL: `${BRAND_LOGO_URL_PREFIX}vcci_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1XSD_ppqCUwFgdfzoTmNr-xID297SeQOG`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}18N7ZxS1eD2Ekp4BTz8mbO_-_hAYa8nNZ`,
    },
  ],
};
