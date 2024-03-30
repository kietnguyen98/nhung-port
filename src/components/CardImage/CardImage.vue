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
  }>(),
  {
    widthHeightRatio: IMAGE_CARD_WIDTH_HEIGHT_RATIO,
    heightRem: 0,
    isRounded: true,
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
      borderRadius: isRounded ? '2rem' : '0',
    }"
  ></div>
</template>

<style scoped>
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
