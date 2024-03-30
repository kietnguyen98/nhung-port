<script setup lang="ts">
import { useResponsiveStore } from '@/stores';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = responsiveStore;
</script>

<template>
  <div class="container">
    <div class="polaroid">
      <img
        src="/assets/images/popup/graphic-design/polaroid.png"
        alt="graphic design polaroid"
        class="polaroid__image"
        :style="{
          height: `${90 * currentScaleRatio}rem`,
          maxHeight: `${90 * currentScaleRatio}rem`,
          transform: `translateX(${5 * currentScaleRatio}rem)`,
        }"
      />
    </div>
    <div class="brands"></div>
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
