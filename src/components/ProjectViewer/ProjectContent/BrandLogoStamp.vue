<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useHover } from '@/hooks';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';
import { TBrand } from '@/types';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);

const controlPopupStore = useControlPopupStore();
const { setIsPostViewerOpened, setBrandToView } =
  controlPopupStore;

defineProps<{
  brand: TBrand;
}>();

const { isHover, refElement } = useHover();

const viewBrand = (brandToView: TBrand) => {
  setIsPostViewerOpened(true);
  setBrandToView(brandToView);
};
</script>

<template>
  <div
    ref="refElement"
    class="brand-logo"
    :style="{
      height: `${16 * currentScaleRatio}rem`,
      width: `${16 * currentScaleRatio}rem`,
      transform: `translateY(${isHover ? -1 * currentScaleRatio : 0}rem)`,
    }"
    @click="viewBrand(brand)"
  >
    <img
      :src="brand.logoURL"
      alt="brand logo"
      class="brand-logo__image"
    />
  </div>
</template>

<style scoped>
.brand-logo {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-out;

  .brand-logo__image {
    width: 100%;
  }
}
</style>
