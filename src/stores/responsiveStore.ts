import { defineStore } from 'pinia';

import { SCREEN_VALUES } from '@/constants';
import { TScreen } from '@/types';

type TMediaQueriesStoreState = {
    currentViewWidth: number;
    currentViewHeight: number;
    currentScreen: TScreen;
    isNotSupport: boolean;
};

export const useResponsiveStore = defineStore('mediaQueries', {
    state: (): TMediaQueriesStoreState => ({
        currentViewHeight: window.innerHeight,
        currentViewWidth: window.innerWidth,
        currentScreen: SCREEN_VALUES.XL,
        isNotSupport: false,
    }),
    actions: {
        initEvent() {
            // first run
            this.currentViewHeight = window.innerHeight;
            this.currentViewWidth = window.innerWidth;

            if (this.currentViewWidth < SCREEN_VALUES.XS.queries.minWidth)
                this.isNotSupport = true;

            Object.values(SCREEN_VALUES).forEach((value) => {
                if (
                    this.currentViewWidth >= value.queries.minWidth &&
                    this.currentViewWidth <= value.queries.maxWidth
                )
                    this.setScreen(value);

                // check for not support device
            });

            // run on every resize event
            window.addEventListener('resize', () => {
                this.currentViewHeight = window.innerHeight;
                this.currentViewWidth = window.innerWidth;

                if (this.currentViewWidth < SCREEN_VALUES.XS.queries.minWidth) {
                    this.isNotSupport = true;
                } else {
                    this.isNotSupport = false;
                }

                Object.values(SCREEN_VALUES).forEach((value) => {
                    if (
                        this.currentViewWidth >= value.queries.minWidth &&
                        this.currentViewWidth <= value.queries.maxWidth
                    )
                        this.setScreen(value);
                });
            });
        },
        setScreen(value: TScreen) {
            this.currentScreen = value;
        },
    },
});
