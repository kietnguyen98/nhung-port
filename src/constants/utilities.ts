import { TMaskCardDimension } from '@/types/mask-card.type';

export const POST_TYPE_VALUES = {
  PHOTO: 'photo',
  VIDEO: 'video',
} as const;

export const MASK_CARD_DIMENSIONS: {
  [key: number]: TMaskCardDimension;
} = {
  1: {
    WIDTH: 255,
    HEIGHT: 279,
  },
  2: {
    WIDTH: 234,
    HEIGHT: 279,
  },
  3: {
    WIDTH: 254,
    HEIGHT: 290,
  },
  4: {
    WIDTH: 281,
    HEIGHT: 281,
  },
  5: {
    WIDTH: 233,
    HEIGHT: 277,
  },
  6: {
    WIDTH: 645,
    HEIGHT: 350,
  },
};

export const MIN_WHEEL_SCROLL_DURATION: number = 1000;
export const MIN_NEGATIVE_SCROLL_DELTA_Y = -60;
export const MIN_POSITIVE_SCROLL_DELTA_Y = 60;
