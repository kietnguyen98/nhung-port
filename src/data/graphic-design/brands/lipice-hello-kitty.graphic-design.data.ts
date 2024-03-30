import {
  BRAND_LOGO_URL_PREFIX,
  GOOGLE_DRIVE_FILE_PREFIX,
  POST_TYPE_VALUES,
} from '@/constants';
import { TBrand } from '@/types';

export const _lipiceHelloKittyBrandData: TBrand = {
  name: 'Lipice Hello Kitty',
  logoURL: `${BRAND_LOGO_URL_PREFIX}lipice_kitty.png`,
  posts: [
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CoX2Q41HrJaCGxcLSXNKHmKx1fUj_tFm`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1go2jUIK02_ZuVN99OnP3vix1ZmVkYqeE`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}135PMCk6AKQWUooAYN7nPvPK8HNAnefVr`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1CAqO5KcKFzzNCeAdUMs1eo2OOU-7LwcE`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}19j0lvuz_jPhfg9AiZFZdF7QKeWXW7MBc`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1RpeGEZR-W2aE4arfxlB8W6rJi4WwW4XZ`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1irTeczZVTQuOpxIN2HpJZUo32GGuNUU5`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}16JlVyOeWV0eGy-L8bP03Ot0MsTlIJ2wE`,
    },
    {
      type: POST_TYPE_VALUES.PHOTO,
      sourceUrl: `${GOOGLE_DRIVE_FILE_PREFIX}1I-Cn1OWZO8c2jJeimMYybq91m-pocgai`,
    },
  ],
};
