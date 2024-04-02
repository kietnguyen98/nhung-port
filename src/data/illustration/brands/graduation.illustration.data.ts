import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _graduationBrandData: TBrand = {
  name: 'Graduation',
  logoURL: '',
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1cwqkU-zh2_T3vVMEj4TC2W4KolTmpVX-`,
    },
  ],
};
