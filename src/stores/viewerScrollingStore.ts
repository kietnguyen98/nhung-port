import { defineStore } from 'pinia';

type TViewScrollingStore = {
    progress: number;
};

export const useViewScrollingStore = defineStore('viewScrolling', {
    state: (): TViewScrollingStore => ({
        progress: 0,
    }),
    actions: {
        setViewProgress(value: number) {
            this.progress = value;
        },
    },
});
