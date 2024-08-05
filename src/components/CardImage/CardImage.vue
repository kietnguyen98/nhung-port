<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';
const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
const IMAGE_CARD_WIDTH_HEIGHT_RATIO = 9 / 16;

withDefaults(
  defineProps<{
    imageSrc: string;
    alt: string;
    widthHeightRatio?: number;
    heightRem?: number;
    isRounded?: boolean;
    withOverlay: boolean;
    clickEventCallback?: () => void;
  }>(),
  {
    widthHeightRatio: IMAGE_CARD_WIDTH_HEIGHT_RATIO,
    heightRem: 0,
    isRounded: true,
    withOverlay: false,
    clickEventCallback: undefined,
  }
);
</script>

<template>
  <div
    class="image-wrapper"
    :style="{
      backgroundImage: `url(${imageSrc})`,
      height: heightRem
        ? `${heightRem * currentScaleRatio}rem`
        : '100%',
      width: heightRem
        ? `${heightRem * currentScaleRatio * widthHeightRatio}rem`
        : 'auto',
      borderRadius: isRounded
        ? `${2 * currentScaleRatio}rem`
        : '0',
    }"
    @click="clickEventCallback"
  >
    <div
      v-if="withOverlay"
      class="hover-overlay"
      :style="{
        borderRadius: isRounded
          ? `${2 * currentScaleRatio}rem`
          : '0',
      }"
    >
      <p class="hover-overlay__title">click to view</p>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hover-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.25s linear;

  .hover-overlay__title {
    color: var(--color-white);
    font-weight: bolder;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
