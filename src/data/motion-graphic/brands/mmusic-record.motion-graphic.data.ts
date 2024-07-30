import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _mMusicRecordbrandData: TBrand = {
  name: 'MMusic Record Label',
  logoURL: `${BRAND_LOGO_URL_PREFIX}mmusic_record.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '179x73ceNfZqwn50lsFbGNIXNMatSr9_K'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}179x73ceNfZqwn50lsFbGNIXNMatSr9_K`,
    },
  ],
};
