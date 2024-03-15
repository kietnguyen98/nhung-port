import { defineStore } from 'pinia';
import { TScreen } from '@/types';
import { SCREEN_VALUES } from '@/constants';

type TMediaQueriesStoreState = {
    currentScreen: TScreen;
};

export const useMediaQueriesStore = defineStore('mediaQueries', {
    state: (): TMediaQueriesStoreState => ({
        currentScreen: SCREEN_VALUES.XL,
    }),
    actions: {
        initEvent() {
            // first run
            Object.values(SCREEN_VALUES).forEach((value) => {
                if (
                    window.innerWidth >= value.queries.minWidth &&
                    window.innerWidth < value.queries.maxWidth
                )
                    this.setScreen(value);
            });
            // run once when on first render and the document.window are ready
            window.addEventListener('resize', () => {
                Object.values(SCREEN_VALUES).forEach((value) => {
                    if (
                        window.innerWidth >= value.queries.minWidth &&
                        window.innerWidth < value.queries.maxWidth
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
