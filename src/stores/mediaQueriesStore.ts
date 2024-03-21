import { defineStore } from 'pinia';

import { SCREEN_VALUES } from '@/constants';
import { TScreen } from '@/types';

type TMediaQueriesStoreState = {
    currentScreen: TScreen;
    isNotSupport: boolean;
};

export const useMediaQueriesStore = defineStore('mediaQueries', {
    state: (): TMediaQueriesStoreState => ({
        currentScreen: SCREEN_VALUES.XL,
        isNotSupport: false,
    }),
    actions: {
        initEvent() {
            // first run
            if (window.innerWidth < SCREEN_VALUES.XS.queries.minWidth)
                this.isNotSupport = true;

            Object.values(SCREEN_VALUES).forEach((value) => {
                if (
                    window.innerWidth >= value.queries.minWidth &&
                    window.innerWidth <= value.queries.maxWidth
                )
                    this.setScreen(value);

                // check for not support device
            });
            // run on every resize event
            window.addEventListener('resize', () => {
                if (window.innerWidth < SCREEN_VALUES.XS.queries.minWidth) {
                    this.isNotSupport = true;
                } else {
                    this.isNotSupport = false;
                }

                Object.values(SCREEN_VALUES).forEach((value) => {
                    if (
                        window.innerWidth >= value.queries.minWidth &&
                        window.innerWidth <= value.queries.maxWidth
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
