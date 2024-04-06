import {
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _personalBrandData: TBrand = {
  name: 'Personal',
  logoURL: '',
  demoPosts: [
    // logo
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1DZ87ElS6gL5BJIuqDgw9jbWM_3yRcCsZ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}13Yu1YOD9eSmim8i5KhQVBhC6afDabemI`,
    },
  ],
  posts: [
    // other photos
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1W8k9qYdW4E9s4gHBD5Zt266C5v4QMBWs`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1UIo_DhvoUR636FBIF1a3GyLU_GbY3fdJ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1A5Tld8XMvIDJAVt88jXCAgGXznEYmLz7`,
    },
  ],
};
