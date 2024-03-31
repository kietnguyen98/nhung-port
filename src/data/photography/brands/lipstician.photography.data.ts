import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipsticianBrandData: TBrand = {
  name: 'Lipstician',
  logoURL: `${BRAND_LOGO_URL_PREFIX}lipstician_logo.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}12fk5Re1HRFYnlhkvUI6V7PnO_TSEyIq7`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1zTLefVcDA8LEcEvYCwhLh923CEOKQvH5`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1K1JXkFZdV7UHwwP9-e6UIQVgcaAMSg_4`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}12tsnWNHtIkMX2PKydIAahaOSy3bLzIAf`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1R_iifOvmGp9m0lktpvZ2MlcmHuq-7r3U`,
    },
  ],
};
