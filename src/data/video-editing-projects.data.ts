import {
    BRAND_LOGO_URL_PREFIX,
    GOOGLE_DRIVE_FILE_PREFIX,
    POST_TYPE_VALUES,
} from '@/constants';
import { TBrand, TProject } from '@/types';
import { getGGDriveVideoResourceUrl } from '@/utilities';

const _refreeBrandData: TBrand = {
    name: 'Refree',
    logoURL: `${BRAND_LOGO_URL_PREFIX}refree.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1kyJYSg8hmUC7HO0XrKHWRu6v4MVHb2_q'
            ),
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1s8UwCDYGZ0g-qXmnnX41HDWGnxjaDdZv'
            ),
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1M9u13ilyZOVEnd3tORNICvpl4YxC2hvu'
            ),
        },
    ],
};

const _sunplayBrandData: TBrand = {
    name: 'Sunplay',
    logoURL: `${BRAND_LOGO_URL_PREFIX}skin_aqua.png`,
    posts: [
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1wy303G6hR9a7TMVLQp1RuD7T4fQ9_SsR'
            ),
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1Jh5bkXdXDXcYDBcGQoFaePcuMiDUXK8A'
            ),
        },
        {
            type: POST_TYPE_VALUES.VIDEO,
            sourceUrl: getGGDriveVideoResourceUrl(
                '1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1'
            ),
        },
    ],
};

export const videoEditingProjectData: TProject = {
    name: 'Video Editing',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    outerImageUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
    introImageUrl: [
        `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
        `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
        `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
    ],
    demoImages: {
        mainImageUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
        subImageUrls: [
            `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
            `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
            `${GOOGLE_DRIVE_FILE_PREFIX}1dk2--Aac1KU6sSsw4HAD2QaK-QrK1TN1`,
        ],
    },
    brands: [_refreeBrandData, _sunplayBrandData],
};
