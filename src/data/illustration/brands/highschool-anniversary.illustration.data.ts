import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _highschoolAnniversaryBrandData: TBrand = {
  name: 'High Shool Anniversary',
  logoURL: '',
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}18Wsf8Ht5yUmiZOD6WSCShr3OYUHKPtiE`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1_K5M6DEBTHJ99C7ePatBXDzBtEr80chq`,
    },
  ],
};
