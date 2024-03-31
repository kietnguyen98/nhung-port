<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <div class="container">
    <div class="polaroid">
      <img
        src="/assets/images/popup/photo-life-style/polaroid.png"
        alt="photo life style polaroid"
        class="polaroid__image"
        :style="{
          height: `${80 * currentScaleRatio}rem`,
          maxHeight: `${80 * currentScaleRatio}rem`,
          transform: `translateY(${5.5 * currentScaleRatio}rem) translateX(${3 * currentScaleRatio}rem)`,
        }"
      />
    </div>
    <div class="brand"></div>
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
</style>
