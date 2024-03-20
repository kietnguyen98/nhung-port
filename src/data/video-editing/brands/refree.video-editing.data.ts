import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

export const _refreeBrandData: TBrand = {
    name: 'Refree',
    logoURL: `${BRAND_LOGO_URL_PREFIX}refree.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1kyJYSg8hmUC7HO0XrKHWRu6v4MVHb2_q'
            ),
            thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1kyJYSg8hmUC7HO0XrKHWRu6v4MVHb2_q`,
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1s8UwCDYGZ0g-qXmnnX41HDWGnxjaDdZv'
            ),
            thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1s8UwCDYGZ0g-qXmnnX41HDWGnxjaDdZv`,
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1M9u13ilyZOVEnd3tORNICvpl4YxC2hvu'
            ),
            thumbnailUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1M9u13ilyZOVEnd3tORNICvpl4YxC2hvu`,
        },
    ],
};
