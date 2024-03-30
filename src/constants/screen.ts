import { TScreen, TScreenLabel } from '@/types';

export const SCREEN_MAXIMUM_WIDTH = 16000;
export const SCREEN_DIMENSIONS_RATIO = 16 / 9;

export const SCREEN_VALUES: {
  [key in TScreenLabel]: TScreen;
} = {
  XXL: {
    label: 'XXL',
    queries: {
      minWidth: 2560,
      minHeight: 2560 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: SCREEN_MAXIMUM_WIDTH,
      maxHeight:
        SCREEN_MAXIMUM_WIDTH * SCREEN_DIMENSIONS_RATIO,
    },
  },
  XL: {
    label: 'XL',
    queries: {
      minWidth: 2048,
      minHeight: 2048 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: 2559,
      maxHeight: 2559 * SCREEN_DIMENSIONS_RATIO,
    },
  },
  L: {
    label: 'L',
    queries: {
      minWidth: 1920,
      minHeight: 1920 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: 2047,
      maxHeight: 2047 * SCREEN_DIMENSIONS_RATIO,
    },
  },
  M: {
    label: 'M',
    queries: {
      minWidth: 1600,
      minHeight: 1600 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: 1919,
      maxHeight: 1919 * SCREEN_DIMENSIONS_RATIO,
    },
  },
  S: {
    label: 'S',
    queries: {
      minWidth: 1280,
      minHeight: 1280 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: 1599,
      maxHeight: 1599 * SCREEN_DIMENSIONS_RATIO,
    },
  },
  XS: {
    label: 'XS',
    queries: {
      minWidth: 1024,
      minHeight: 1024 * SCREEN_DIMENSIONS_RATIO,
      maxWidth: 1279,
      maxHeight: 1279 * SCREEN_DIMENSIONS_RATIO,
    },
  },
} as const;

export const COMPONENT_SCALE_RATIO: {
  [key in TScreenLabel]: number;
} = {
  XXL: 1,
  XL: 0.8,
  L: 0.75,
  M: 0.625,
  S: 0.5,
  XS: 0.4,
} as const;
