import { defineStore } from 'pinia';

type TPostViewScrollingStore = {
  progress: number;
};

export const usePostViewScrollingStore = defineStore(
  'postViewerScrolling',
  {
    state: (): TPostViewScrollingStore => ({
      progress: 0,
    }),
    actions: {
      setViewProgress(value: number) {
        this.progress = value;
      },
    },
  }
);
