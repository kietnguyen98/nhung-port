import { TBrand } from '@/types';
import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';

export const _pharmacityBrandData: TBrand = {
    name: 'Pharmacity',
    logoURL: `${BRAND_LOGO_URL_PREFIX}pharmacity.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CHcj3c1_T83KLf5bwvRvKs1YATeIgv6C`,
        },
    ],
};
