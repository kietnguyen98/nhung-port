import { TProject } from '@/types';

import {
  _refreeBrandData,
  _sunplayBrandData,
} from './brands';

export const videoEditingProjectData: TProject = {
  name: 'Motion Graphic',
  idName: 'motion-graphic',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  outerImageUrl:
    '/assets/images/project-wallpaper/motion-graphic.jpg',
  introImageUrl: [
    _sunplayBrandData.posts[2].thumbnailUrl ?? '',
    _sunplayBrandData.posts[2].thumbnailUrl ?? '',
    _sunplayBrandData.posts[2].thumbnailUrl ?? '',
  ],
  demoImages: {
    mainImageUrl:
      _sunplayBrandData.posts[2].thumbnailUrl ?? '',
    subImageUrls: [
      _sunplayBrandData.posts[2].thumbnailUrl ?? '',
      _sunplayBrandData.posts[2].thumbnailUrl ?? '',
      _sunplayBrandData.posts[2].thumbnailUrl ?? '',
    ],
  },
  brands: [_refreeBrandData, _sunplayBrandData],
};
