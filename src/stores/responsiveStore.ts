import { defineStore } from 'pinia';

import { SCREEN_VALUES } from '@/constants';
import { TScreen } from '@/types';

type TMediaQueriesStoreState = {
  currentViewWidth: number;
  currentViewHeight: number;
  currentScreen: TScreen;
  currentScaleRatio: number;
  isNotSupport: boolean;
  isResizing: boolean;
  debounceTimer?: NodeJS.Timeout;
};

const RESIZING_DEBOUNCE_TIME = 1000;

export const useResponsiveStore = defineStore(
  'mediaQueries',
  {
    state: (): TMediaQueriesStoreState => ({
      currentViewHeight: window.innerHeight,
      currentViewWidth: window.innerWidth,
      currentScreen: SCREEN_VALUES.XL,
      currentScaleRatio: 1,
      isNotSupport: false,
      isResizing: false,
      debounceTimer: undefined,
    }),
    actions: {
      handleWindowResize() {
        if (!this.isResizing) this.isResizing = true;
        if (this.debounceTimer !== undefined)
          clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.currentViewHeight = window.innerHeight;
          this.currentViewWidth = window.innerWidth;
          // check for not support device
          if (
            this.currentViewWidth <
            SCREEN_VALUES.XS.queries.minWidth
          ) {
            this.isNotSupport = true;
          } else {
            this.isNotSupport = false;
          }
          // get component scale ratio
          Object.values(SCREEN_VALUES).forEach(
            (screenValue) => {
              if (
                this.currentViewWidth >=
                  screenValue.queries.minWidth &&
                this.currentViewWidth <=
                  screenValue.queries.maxWidth
              ) {
                this.setScreen(screenValue);
              }
            }
          );

          this.setScaleRatio(
            Math.ceil(
              (this.currentViewWidth /
                SCREEN_VALUES.XXL.queries.minWidth) *
                100
            ) / 100
          );

          this.isResizing = false;
        }, RESIZING_DEBOUNCE_TIME);
      },
      initEvent() {
        // first run
        this.handleWindowResize();

        // run on every resize event
        window.addEventListener(
          'resize',
          this.handleWindowResize
        );
      },
      setScreen(value: TScreen) {
        this.currentScreen = value;
      },
      setScaleRatio(value: number) {
        this.currentScaleRatio = value;
      },
    },
  }
);
