<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';

import { BrandLogoStamp } from '.';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);

const graphicDesignData = projectMockData.graphicDesign;
</script>

<template>
  <div class="container">
    <div class="polaroid">
      <img
        src="/assets/images/popup/graphic-design/polaroid.webp"
        alt="graphic design polaroid"
        class="polaroid__image"
        :style="{
          height: `${90 * currentScaleRatio}rem`,
          maxHeight: `${90 * currentScaleRatio}rem`,
          transform: `translateX(${5 * currentScaleRatio}rem)`,
        }"
      />
    </div>
    <div
      v-if="graphicDesignData"
      class="brands"
      :style="{
        padding: `${5 * currentScaleRatio}rem ${20 * currentScaleRatio}rem`,
        gap: `${1.5 * currentScaleRatio}rem`,
      }"
    >
      <!-- guideline image -->
      <img
        src="/assets/images/popup/click-on-note.webp"
        alt="click-on-note"
        class="click-on-note-img"
        :style="{
          height: `${35 * currentScaleRatio}rem`,
          top: `${-16 * currentScaleRatio}rem`,
          left: `${5 * currentScaleRatio}rem`,
        }"
      />
      <!-- brands logo -->
      <BrandLogoStamp
        v-for="brand in graphicDesignData.brands"
        :key="brand.name"
        :brand="brand"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  widows: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.click-on-note-img {
  position: absolute;
  z-index: 1;
  animation: heart-beat 2s ease-in-out infinite;
}

.brands {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
