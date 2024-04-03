import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _guardianBrandData: TBrand = {
  name: 'Guardian',
  logoURL: `${BRAND_LOGO_URL_PREFIX}guardian_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1SdQL6rJGkrelCuwQ1GFiRMlYlqG48Zla`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1lHvi-xnY_sSWKlnbNM20W4LZ4VIQt3UQ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1apugyQUpLpYCP2YmgQSFJnXDbQ69Vrzr`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1Uh-W2rXhRgcIFYOop_lt7Uiyeuvw2Dln`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1QLFHc3-l9iXxTeE-jq7KBVAEtRwfwwe8`,
    },
  ],
};
