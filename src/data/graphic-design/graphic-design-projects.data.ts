import { TProject } from '@/types';

import {
  _50MegumiBrandData,
  _hannahOlalaBrandData,
  _hasakiBrandData,
  _huongNghiepDayNgheBrandData,
  _lipiceHelloKittyBrandData,
  _lipiceLipbalmBrandData,
  _lipiceMeltyCreamBrandData,
  _lipiceSheerColorBrandData,
  _lipiceSheerQBrandData,
  _lipOnLipBrandData,
  _lipsticianBrandData,
  _mentholatumBrandData,
  _pharmacityBrandData,
  _refreeBrandData,
  _rohtoHealthScienceBrandData,
  _selsunBrandData,
  _sharkTankBrandData,
  _skinAquaBrandData,
  _sociollaBrandData,
} from './brands';

export const graphicDesignProjectData: TProject = {
  name: 'Graphic Design',
  idName: 'graphic-design',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  outerImageUrl:
    '/assets/images/project-wallpaper/graphic-design.jpeg',
  introImageUrl: [
    _sociollaBrandData.posts[0].sourceUrl,
    _skinAquaBrandData.posts[3].sourceUrl,
    _lipOnLipBrandData.posts[2].sourceUrl,
  ],
  demoImages: {
    mainImageUrl:
      _lipiceHelloKittyBrandData.posts[0].sourceUrl,
    subImageUrls: [
      _lipiceSheerQBrandData.posts[2].sourceUrl,
      _mentholatumBrandData.posts[1].sourceUrl,
      _skinAquaBrandData.posts[6].sourceUrl,
    ],
  },
  brands: [
    _50MegumiBrandData,
    _skinAquaBrandData,
    _hannahOlalaBrandData,
    _hasakiBrandData,
    _lipOnLipBrandData,
    _lipiceHelloKittyBrandData,
    _lipiceLipbalmBrandData,
    _lipiceMeltyCreamBrandData,
    _lipiceSheerColorBrandData,
    _lipiceSheerQBrandData,
    _lipsticianBrandData,
    _mentholatumBrandData,
    _refreeBrandData,
    _rohtoHealthScienceBrandData,
    _selsunBrandData,
    _sharkTankBrandData,
    _sociollaBrandData,
    _huongNghiepDayNgheBrandData,
    _pharmacityBrandData,
  ],
};
