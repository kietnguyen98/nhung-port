import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _mentholatumBrandData: TBrand = {
    name: 'Mentholatum',
    logoURL: `${BRAND_LOGO_URL_PREFIX}mentholatum_raw.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1wRDK-dpp2cE4h-nTEMF0drvVdbBm3CWg`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1zmEmLE9ZddEfaiwVnbuEdW5jGErLKMHv`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}184C03-CePq9ixcsYmH6tLjBuvGLfwuok`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1jFvvMJw1At0opD9xWbV_kPOltpSBNVQL`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1wd2FTQKh7Q1x7ZielluGjd01W7hZdRxw`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1KSyo7fTToKrzd82nWCav8ZJJwh6BgPwo`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1bPweCSDXMiWgGwaLfWjVaw4u8tvvWlCL`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1R7WLB1xpL3sUDDqG1e21mcrQogYsKF40`,
        },
    ],
};
