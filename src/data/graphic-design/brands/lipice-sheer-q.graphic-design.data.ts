import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceSheerQBrandData: TBrand = {
    name: 'Lipice Sheer Q',
    logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_sheer_q_pink.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1u0d6tmSjKKv9Sh-g0JwGHhxCzgdzDefn`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1WicirFeicMEKHaWVHm_TDl8VodSifxvs`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}10-yIuYDzR2LDTJJWsD0C82QZq4IPKPgp`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1ABCMz-dWpzlX70PGMyiyqHCVwxJ7ukDq`,
        },
    ],
};
