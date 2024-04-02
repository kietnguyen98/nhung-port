import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _rambutanBrandData: TBrand = {
  name: 'Rambutan',
  logoURL: '',
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1a7rz6bjtlLrAGig847CJh-IKXDGyD-4L`,
    },
  ],
};
