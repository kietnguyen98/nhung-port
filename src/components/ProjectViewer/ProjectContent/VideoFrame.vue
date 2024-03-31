<script setup lang="ts">
import { storeToRefs } from 'pinia';

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
      <iframe
        v-if="sourceUrl"
        :src="sourceUrl"
        class="video-frame"
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
  border-radius: 4rem;
  background-color: transparent;
}

.video-frame-overlay {
  border-radius: 4rem;
  width: calc(100% - 2 * 2rem);
  height: calc(100% - 2 * 2rem);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .video-frame {
    border-radius: 4rem;
    width: 100%;
    height: 100%;
  }
}

.video-frame-overlay--ready {
  background-color: var(--color-black);
}
</style>
