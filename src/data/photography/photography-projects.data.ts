import { TProject } from '@/types';

import {
    _50MegumiBrandData,
    _flawsomeBrandData,
    _lipOnLipBrandData,
    _lipsticianBrandData,
    _sunplayBrandData,
} from './brands';

export const photographyProjectData: TProject = {
    name: 'Photography',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    outerImageUrl: _50MegumiBrandData.posts[1].sourceUrl,
    introImageUrl: [
        _flawsomeBrandData.posts[0].sourceUrl,
        _lipOnLipBrandData.posts[0].sourceUrl,
        _lipsticianBrandData.posts[2].sourceUrl,
    ],
    demoImages: {
        mainImageUrl: _50MegumiBrandData.posts[3].sourceUrl,
        subImageUrls: [
            _flawsomeBrandData.posts[7].sourceUrl,
            _lipOnLipBrandData.posts[3].sourceUrl,
            _lipOnLipBrandData.posts[1].sourceUrl,
        ],
    },
    brands: [
        _50MegumiBrandData,
        _flawsomeBrandData,
        _lipOnLipBrandData,
        _lipsticianBrandData,
        _sunplayBrandData,
    ],
};
