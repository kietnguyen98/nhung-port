import { defineStore } from 'pinia';
import { TBrand } from '@/types';

type TControlPopupStoreState = {
    isPopupOpened: boolean;
    isPostViewerOpened: boolean;
    brandToView?: TBrand;
};

export const useControlPopupStore = defineStore('controlPopup', {
    state: (): TControlPopupStoreState => ({
        isPopupOpened: false,
        isPostViewerOpened: false,
        brandToView: undefined,
    }),
    getters: {
        getIsPopupOpened: (state) => state.isPopupOpened,
    },
    actions: {
        setIsPopupOpened(value: boolean) {
            this.isPopupOpened = value;
        },
        setIsPostViewerOpened(value: boolean) {
            this.isPostViewerOpened = value;
        },
        setBrandToView(brandData: TBrand | undefined) {
            this.brandToView = brandData;
        },
    },
});
