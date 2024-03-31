import { defineStore } from 'pinia';

import { TBrand, TProject } from '@/types';

type TControlPopupStoreState = {
  isPopupOpened: boolean;
  isPostViewerOpened: boolean;
  projectToView?: TProject;
  brandToView?: TBrand;
};

export const useControlPopupStore = defineStore(
  'controlPopup',
  {
    state: (): TControlPopupStoreState => ({
      isPopupOpened: false,
      isPostViewerOpened: false,
      projectToView: undefined,
      brandToView: undefined,
    }),
    actions: {
      setIsPopupOpened(value: boolean) {
        this.isPopupOpened = value;
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
