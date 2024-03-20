import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceLipbalmBrandData: TBrand = {
    name: 'Lipice Lipbalm',
    logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_lipbalm.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1eVH4V5xBfUqHsjQyt7_q9puDwF17S9m9`,
        },
    ],
};
