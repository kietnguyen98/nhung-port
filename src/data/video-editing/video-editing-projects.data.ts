import { TProject } from '@/types';

import {
  _refreeBrandData,
  _sunplayBrandData,
} from './brands';

export const videoEditingProjectData: TProject = {
  name: 'Motion Graphic',
  idName: 'motion-graphic',
  outerImageUrl:
    '/assets/images/project-wallpaper/motion-graphic.jpg',
  brands: [_refreeBrandData, _sunplayBrandData],
};
