import { TBrand } from '@/types';
import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';

export const _lipsticianBrandData: TBrand = {
    name: 'Lipstician',
    logoURL: `${BRAND_LOGO_URL_PREFIX}lipstician.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1hV2pPA4C-zoHaC_W4qh3GAitn-faQ94F`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1rMCqjIxLzbOAoxGiMBGstLtAp6QMhgKt`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}13vKqVQMMmq8OK8BpNjf2zxFRVWd4VkIP`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1Il76oM7UwjLuWnRmsY-DuZkcvwvfhvun`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1ictpBEr-qi4tzzsKmLjgA-BfQTDbgUUy`,
        },
    ],
};
