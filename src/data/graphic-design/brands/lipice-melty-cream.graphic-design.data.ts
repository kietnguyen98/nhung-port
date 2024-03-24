import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceMeltyCreamBrandData: TBrand = {
    name: 'Melty Cream Lip',
    logoURL: `${BRAND_LOGO_URL_PREFIX}melty_cream.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}18COYg19hliMFGn8g4TrcgRdgaWJA6BGm`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1GE9NdREChWyraJl-nSivXGunry5aczib`,
        },
    ],
};
