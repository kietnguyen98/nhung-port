import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _rohtoHealthScienceBrandData: TBrand = {
  name: 'Rohto Health Science',
  logoURL: `${BRAND_LOGO_URL_PREFIX}rohtohealth_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1zlGdFz7xPfaOKrLR5CsykahZp7XqupCb`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1aavs5vHEXKnP0EnxwC-MVBy-ph4MBVRs`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1JO54Oe7ggULjcLrxDf6DwFR1tIY_IEvn`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1r3AapFcqc5jW_-SBVGkPPiCIGu7fGRpy`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1j7Ofx5kGOc5yty7kKwPR1m2Mhr1Azpto`,
    },
  ],
};
