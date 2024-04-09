<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';

import { BrandLogoStamp } from '.';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);

const photoLifeStyleData = projectMockData.photoLifeStyle;
</script>

<template>
  <div class="container">
    <div class="polaroid">
      <img
        src="/assets/images/popup/photo-life-style/polaroid.webp"
        alt="photo life style polaroid"
        class="polaroid__image"
        :style="{
          height: `${80 * currentScaleRatio}rem`,
          maxHeight: `${80 * currentScaleRatio}rem`,
          transform: `translateY(${6 * currentScaleRatio}rem) translateX(${3 * currentScaleRatio}rem)`,
        }"
      />
    </div>
    <div
      v-if="photoLifeStyleData"
      class="brands"
      :style="{
        marginTop: `${8 * currentScaleRatio}rem`,
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
          top: `${-20 * currentScaleRatio}rem`,
          left: `${3.5 * currentScaleRatio}rem`,
        }"
      />
      <!-- brands logo -->
      <BrandLogoStamp
        v-for="brand in photoLifeStyleData.brands"
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
  z-index: 0;
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
