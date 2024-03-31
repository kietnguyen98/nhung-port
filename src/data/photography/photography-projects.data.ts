import { TProject } from '@/types';

import {
  _50MegumiBrandData,
  _flawsomeBrandData,
  _lipOnLipBrandData,
  _lipsticianBrandData,
  _sunplayBrandData,
} from './brands';

export const photographyProjectData: TProject = {
  name: 'Photo Life Style',
  idName: 'photo-life-style',
  outerImageUrl:
    '/assets/images/project-wallpaper/photo-life-style.jpg',
  brands: [
    _50MegumiBrandData,
    _flawsomeBrandData,
    _lipOnLipBrandData,
    _lipsticianBrandData,
    _sunplayBrandData,
  ],
};
