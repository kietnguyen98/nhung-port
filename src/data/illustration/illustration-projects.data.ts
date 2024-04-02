import { TProject } from '@/types';

import {
  _graduationBrandData,
  _haulucidBrandData,
  _highschoolAnniversaryBrandData,
  _insideTheTunnelBrandData,
  _personalBrandData,
  _rambutanBrandData,
} from './brands';

export const illustrationProjectData: TProject = {
  name: 'Illustration',
  idName: 'illustration',
  outerImageUrl:
    '/assets/images/project-wallpaper/illustration.jpeg',
  brands: [
    _graduationBrandData,
    _haulucidBrandData,
    _highschoolAnniversaryBrandData,
    _insideTheTunnelBrandData,
    _personalBrandData,
    _rambutanBrandData,
  ],
};
