import { TProject } from '@/types';

import {
  _lipOnLipBrandData,
  _refreeBrandData,
  _rmitBrandData,
  _sunplayBrandData,
} from './brands';

export const motionGraphicProjectData: TProject = {
  name: 'Motion Graphic',
  idName: 'motion-graphic',
  outerImageUrl:
    '/assets/images/project-wallpaper/motion-graphic.jpg',
  brands: [
    _refreeBrandData,
    _rmitBrandData,
    _lipOnLipBrandData,
    _sunplayBrandData,
  ],
};
