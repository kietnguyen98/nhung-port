import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipOnLipBrandData: TBrand = {
    name: 'LIP On Lip',
    logoURL: `${BRAND_LOGO_URL_PREFIX}lip_on_lip.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1pKCa6OBnYNPI4UnAh1Ls48fHHf1WoefF`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1a91I03D7qoq9zYhmdC6cHpw8EicNkl-Y`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1_5jpuOaGH_qFVGPpMhx5f3GG5V5fsFt7`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1W6TNV2sFkwoBiRMhzYiiIyjALtgysbOd`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1oB4dhE_9cD0crPlZzz0KeRY7AMb0jFjS`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}118dpqCG4qm4uyfWCX9a-HTfKD7r8ZTJe`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1k6I6xpJ4h18jYypoLtWuiFdmgeve8p9I`,
        },
        {
            type: POST_TYPE_VALUES.PHOTO,
            sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1A6JUAD4dbl8uNGr_D5ALPYSvh6JFB4f4`,
        },
    ],
};
