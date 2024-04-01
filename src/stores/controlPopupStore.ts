import { defineStore } from 'pinia';

import { TBrand, TProject } from '@/types';

type TControlPopupStoreState = {
  isProjectViewerOpened: boolean;
  isPostViewerOpened: boolean;
  projectToView?: TProject;
  brandToView?: TBrand;
};

export const useControlPopupStore = defineStore(
  'controlPopup',
  {
    state: (): TControlPopupStoreState => ({
      isProjectViewerOpened: false,
      isPostViewerOpened: false,
      projectToView: undefined,
      brandToView: undefined,
    }),
    actions: {
      setIsProjectViewerOpened(value: boolean) {
        this.isProjectViewerOpened = value;
      },
      setIsPostViewerOpened(value: boolean) {
        this.isPostViewerOpened = value;
      },
      setProjectToView(projectData: TProject | undefined) {
        this.projectToView = projectData;
      },
      setBrandToView(brandData: TBrand | undefined) {
        this.brandToView = brandData;
      },
    },
  }
);
