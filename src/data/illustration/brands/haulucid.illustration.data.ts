import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _haulucidBrandData: TBrand = {
  name: 'Haulucid',
  logoURL: '',
  demoPosts: [
    // logo
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1cMoadV98znnCLPnFz81gn4SArcizN2L1`,
    },
  ],
  posts: [
    // other photos
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1w-1RrXJUNzXY0i7dcK4Hi1NugyoDkSa6`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1hUJ_0UAJIx1QbCHs0V7isY5XmUuWAAnQ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1VRloqLXhaWFD6hAGFGBir2grs9-caCdv`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CfxlS_VkeeVEN12qENtuLNezRcEUWT3j`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1-3nXmuAwPW83uaNG5BI7cr8E01gwF5L8`,
    },
  ],
};
