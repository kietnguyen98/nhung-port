import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _personalBrandData: TBrand = {
  name: 'Personal',
  logoURL: '',
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1DZ87ElS6gL5BJIuqDgw9jbWM_3yRcCsZ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}13Yu1YOD9eSmim8i5KhQVBhC6afDabemI`,
    },
  ],
};
