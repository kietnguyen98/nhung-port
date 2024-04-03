import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _sociollaBrandData: TBrand = {
  name: 'Sociolla',
  logoURL: `${BRAND_LOGO_URL_PREFIX}sociolla_logo.webp`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}11gdILO7VKmQg2_x8r7OJ-cCK8s9Ffamw`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}14CWrpluLsF8uFNxKNz_1jyFzIC83CKDh`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1_0mA920HVUwFnq0w4VNSkNARWIOTDUo-`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1LbBgNTZ3NdZlSJy4k3BHepf-Qte2GfPy`,
    },
  ],
};
