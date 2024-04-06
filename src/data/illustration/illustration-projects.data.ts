import { TProject } from '@/types';

import {
  _graduationBrandData,
  _haulucidBrandData,
  _highschoolAnniversaryBrandData,
  _insideTheTunnelBrandData,
  _personalBrandData,
  _rambutanBrandData,
  _theJumpBrandData,
} from './brands';

export const illustrationProjectData: TProject = {
  name: 'Illustration',
  idName: 'illustration',
  outerImageUrl:
    '/assets/images/project-wallpaper/illustration.webp',
  brands: [
    _graduationBrandData,
    _haulucidBrandData,
    _highschoolAnniversaryBrandData,
    _insideTheTunnelBrandData,
    _personalBrandData,
    _rambutanBrandData,
    _theJumpBrandData,
  ],
};
