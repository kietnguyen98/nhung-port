import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _refreeBrandData: TBrand = {
  name: 'Refree',
  logoURL: `${BRAND_LOGO_URL_PREFIX}refre_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1kyJYSg8hmUC7HO0XrKHWRu6v4MVHb2_q'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1wo0q1DlHOHoOJRvJ1z8PIkvTgQl8WgRV`,
    },
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1s8UwCDYGZ0g-qXmnnX41HDWGnxjaDdZv'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1e2HH9LAjSF9OgP9dvP2d0tl_UQb9-QQB`,
    },
    {
      type: POST_TYPE_VALUES.VIDEO,
      sourceUrl: getGGDriveVideoResourceUrl(
        '1M9u13ilyZOVEnd3tORNICvpl4YxC2hvu'
      ),
      thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}12o590d0a6wSwj7C_kh4KNlmxyQdziQh2`,
    },
  ],
};
