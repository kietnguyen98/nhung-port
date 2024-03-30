import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceSheerColorBrandData: TBrand = {
  name: 'Lipice Sheer Color',
  logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_mentholatum_sheer.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1SvnJVhygxYSoT3Yue1fRNzBCJFcfz5Bf`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1zFhmKf7fhPdv8A8lYeRY8o6otoZ3LVlm`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}17eqAIqre9per8KoE9paPHm2Xm4MbLVqh`,
    },
  ],
};
