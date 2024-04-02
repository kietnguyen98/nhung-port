<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

defineProps<{
  thumbnailImageUrl: string;
  videoUrl: string;
  handlePlayVideo: (newVideoUrl: string) => void;
}>();

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <div
    v-if="thumbnailImageUrl"
    class="video-thumbnail"
    :style="{
      height: `${27.75 * currentScaleRatio}rem`,
      width: `${18.9 * currentScaleRatio}rem`,
      backgroundImage: `url(${thumbnailImageUrl})`,
    }"
  >
    <div class="video-thumbnail__play-icon-overlay">
      <img
        ref="refElement"
        src="/assets/icons/play.png"
        alt="play icon"
        class="video-thumbnail__play-icon"
        :style="{
          height: `${6 * currentScaleRatio}rem`,
          width: `${6 * currentScaleRatio}rem`,
        }"
        @click="handlePlayVideo(videoUrl)"
      />
    </div>
  </div>
</template>

<style scoped>
.video-thumbnail {
  background-color: var(--color-dark);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.video-thumbnail__play-icon-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.25s linear;

  .video-thumbnail__play-icon {
    opacity: 0;
    transition:
      opacity 0.25s 0.25s linear,
      scale 0.25s linear;

    &:hover {
      scale: 1.2;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }

  &:hover .video-thumbnail__play-icon {
    opacity: 1;
  }
}
</style>
