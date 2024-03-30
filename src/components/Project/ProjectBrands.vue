<script setup lang="ts">
import { storeToRefs } from 'pinia';

import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';
import { TBrand } from '@/types';
defineProps<{
  listBrands: Array<TBrand>;
}>();

const store = useControlPopupStore();
const { setIsPostViewerOpened, setBrandToView } = store;

const openPostViewer = (brandData: TBrand) => {
  setIsPostViewerOpened(true);
  setBrandToView(brandData);
};

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
</script>

<template>
  <div class="brands-container">
    <h4 class="brands-container__title">
      Brands collaboration
    </h4>
    <h6 class="brands-container__title">
      click on brand's logo to view more
    </h6>
    <div class="brand-logos-container">
      <div
        v-for="brand in listBrands"
        :key="brand.name"
        class="brand-card brand-card--enter-ani"
        :style="{
          height: `${15 * currentScaleRatio}rem`,
          width: `${15 * currentScaleRatio}rem`,
        }"
        @:click="openPostViewer(brand)"
      >
        <img
          class="brand-card__logo-image"
          :src="brand.logoURL"
          :alt="`${brand.name} Brand Logo`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.brands-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background-color: var(--color-pink);

  .brands-container__title {
    font-weight: bolder;
  }
}
.brand-logos-container {
  padding-top: 5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.brand-card {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  transition: all 0.5s ease;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .brand-card__logo-image {
    height: auto;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
}

.brand-card--enter-ani {
  opacity: 0;
  animation: fade-in-only linear forwards;
  animation-timeline: view();
  animation-range: entry;
}
</style>
