import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _rmitBrandData: TBrand = {
  name: 'Rmit',
  logoURL: '',
  posts: [
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1ydSm8qOJ5-_G9aGrzHiUfYjjFi1cyw2x'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1ydSm8qOJ5-_G9aGrzHiUfYjjFi1cyw2x`,
    },
  ],
};
