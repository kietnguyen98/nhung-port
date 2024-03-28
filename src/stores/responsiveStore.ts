import { defineStore } from 'pinia';

import { SCREEN_VALUES } from '@/constants';
import { TScreen } from '@/types';

type TMediaQueriesStoreState = {
    currentViewWidth: number;
    currentViewHeight: number;
    currentScreen: TScreen;
    currentScaleRatio: number;
    isNotSupport: boolean;
};

export const useResponsiveStore = defineStore('mediaQueries', {
    state: (): TMediaQueriesStoreState => ({
        currentViewHeight: window.innerHeight,
        currentViewWidth: window.innerWidth,
        currentScreen: SCREEN_VALUES.XL,
        currentScaleRatio: 1,
        isNotSupport: false,
    }),
    actions: {
        initEvent() {
            // first run
            this.currentViewHeight = window.innerHeight;
            this.currentViewWidth = window.innerWidth;
            // check for not support device
            if (this.currentViewWidth < SCREEN_VALUES.XS.queries.minWidth)
                this.isNotSupport = true;
            // get component scale ratio
            Object.values(SCREEN_VALUES).forEach((screenValue) => {
                if (
                    this.currentViewWidth >= screenValue.queries.minWidth &&
                    this.currentViewWidth <= screenValue.queries.maxWidth
                ) {
                    this.setScreen(screenValue);
                }
            });

            this.setScaleRatio(
                Math.ceil(
                    (this.currentViewWidth /
                        SCREEN_VALUES.XXL.queries.minWidth) *
                        100
                ) / 100
            );

            // run on every resize event
            window.addEventListener('resize', () => {
                this.currentViewHeight = window.innerHeight;
                this.currentViewWidth = window.innerWidth;
                // check for not support device
                if (this.currentViewWidth < SCREEN_VALUES.XS.queries.minWidth) {
                    this.isNotSupport = true;
                } else {
                    this.isNotSupport = false;
                }
                // get component scale ratio
                Object.values(SCREEN_VALUES).forEach((screenValue) => {
                    if (
                        this.currentViewWidth >= screenValue.queries.minWidth &&
                        this.currentViewWidth <= screenValue.queries.maxWidth
                    ) {
                        this.setScreen(screenValue);
                    }
                });

                this.setScaleRatio(
                    Math.ceil(
                        (this.currentViewWidth /
                            SCREEN_VALUES.XXL.queries.minWidth) *
                            100
                    ) / 100
                );
            });
        },
        setScreen(value: TScreen) {
            this.currentScreen = value;
        },
        setScaleRatio(value: number) {
            this.currentScaleRatio = value;
        },
    },
});
