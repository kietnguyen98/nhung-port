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
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1KONJvSVp2nhMNi9Mqs98XN1UIY-WvAot`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1ugUU-NYs7zFvN9BLEz4TI6kVLPE-_nqo`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1ajjBCvlXdmgZZNM1TmjtiOn879PhLHuM`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}18crfXT1HiDcTr7vKSMscbT_B5KlQE1iK`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1O0BOl6GB7boXUTp6MLMaF5PwltLET9vL`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1z6RhVkqF1S2Jj2SY3HS3p_x3hNkNo_gj`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1j5_h77sz9Q_OwrTSgP56Bt-wJXslJ219`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}16lDMYbQHJg5_-w5ahKKcoI8IkLnvDwKr`,
    },
  ],
};
