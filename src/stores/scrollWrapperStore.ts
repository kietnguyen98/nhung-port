import { defineStore } from 'pinia';

type TScrollWrapperStoreState = {
  containerScrollWrapper: HTMLElement | undefined;
  projectViewerScrollWrapper: HTMLElement | undefined;
  postViewerScrollWrapper: HTMLElement | undefined;
};

export const useScrollWrapperStore = defineStore(
  'scrollWrapper',
  {
    state: (): TScrollWrapperStoreState => ({
      containerScrollWrapper: undefined,
      projectViewerScrollWrapper: undefined,
      postViewerScrollWrapper: undefined,
    }),
    actions: {
      setContainerScrollWrapper(value: HTMLElement) {
        this.containerScrollWrapper = value;
      },
      setProjectViewerScrollWrapper(value: HTMLElement) {
        this.projectViewerScrollWrapper = value;
      },
      setPostViewerScrollWrapper(value: HTMLElement) {
        this.postViewerScrollWrapper = value;
      },
    },
  }
);
