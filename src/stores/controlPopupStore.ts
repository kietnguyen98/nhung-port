import { defineStore } from 'pinia';

import { TBrand, TPost, TProject } from '@/types';

type TControlPopupStoreState = {
  isProjectViewerOpened: boolean;
  isPostViewerOpened: boolean;
  isFavoritePostViewerOpened: boolean;
  projectToView?: TProject;
  brandToView?: TBrand;
  favoritePostToView?: TPost;
};

export const useControlPopupStore = defineStore(
  'controlPopup',
  {
    state: (): TControlPopupStoreState => ({
      isProjectViewerOpened: false,
      isPostViewerOpened: false,
      isFavoritePostViewerOpened: false,
      projectToView: undefined,
      brandToView: undefined,
      favoritePostToView: undefined,
    }),
    actions: {
      setIsProjectViewerOpened(value: boolean) {
        this.isProjectViewerOpened = value;
      },
      setIsPostViewerOpened(value: boolean) {
        this.isPostViewerOpened = value;
      },
      setIsFavoritePostViewerOpened(value: boolean) {
        this.isFavoritePostViewerOpened = value;
      },
      setProjectToView(projectData: TProject | undefined) {
        this.projectToView = projectData;
      },
      setBrandToView(brandData: TBrand | undefined) {
        this.brandToView = brandData;
      },
      setFavoritePostToView(postData: TPost | undefined) {
        this.favoritePostToView = postData;
      },
    },
  }
);
