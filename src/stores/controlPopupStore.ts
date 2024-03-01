import { defineStore } from 'pinia';

export const useControlPopupStore = defineStore('controlPopup', {
    state: () => ({
        isPopupOpened: false,
    }),
    getters: {
        getIsPopupOpened: (state) => state.isPopupOpened,
    },
    actions: {
        setIsPopupOpened(value: boolean) {
            this.isPopupOpened = value;
        },
    },
});
