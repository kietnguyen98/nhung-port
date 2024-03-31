import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _flawsomeBrandData: TBrand = {
  name: 'Flawsome',
  logoURL: `${BRAND_LOGO_URL_PREFIX}flawsome_logo.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1hU0ZkM23ADuklmwC7RKTr_yul6MhXiXI`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1um8l3MdLOjCXBRS_3VuZUMxefPh-HmON`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}14VCwVsKwHb7ctMRR6HtFQyk-PE9IE_dJ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1mwA6VfnYvpHLvzvPru8JGo29AeI_sXCK`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1-A8-EszC_wgxMENvfaLaHqEYjlZYinRK`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1AQypELESxdEH0Z09A2tg6bRS3-1L4zLA`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1G5nHZGaA6ykKWbLHc8dstfaw55rPEPPa`,
    },
  ],
};
