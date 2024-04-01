<script setup lang="ts">
import { storeToRefs } from 'pinia';

import loadingImage from '@/assets/images/loader-320px.gif';
import { useResponsiveStore } from '@/stores';

defineProps<{
  sourceUrl: string;
}>();

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>
<template>
  <div
    class="video-frame-container"
    :style="{
      height: `${73.3 * currentScaleRatio}rem`,
      width: `${102.6 * currentScaleRatio}rem`,
      top: `${13.8 * currentScaleRatio}rem`,
      left: `${4.2 * currentScaleRatio}rem`,
    }"
  >
    <div
      :class="[
        'video-frame-overlay',
        sourceUrl && 'video-frame-overlay--ready',
      ]"
    >
      <div
        v-if="sourceUrl"
        class="video-frame-loading-in-progress"
      >
        <img :src="loadingImage" />
      </div>
      <iframe
        v-if="sourceUrl"
        :src="sourceUrl"
        class="video-frame"
        :style="{
          borderRadius: `${4 * currentScaleRatio}rem`,
        }"
        allow="autoplay"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.video-frame-container {
  position: absolute;
  z-index: 1;
  background-color: transparent;
}

.video-frame-overlay {
  width: calc(100% - 2 * 2rem);
  height: calc(100% - 2 * 2rem);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .video-frame-loading-in-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-frame {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}

.video-frame-overlay--ready {
  background-color: var(--color-black);
}
</style>
