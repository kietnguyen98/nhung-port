<script setup lang="ts">
import { storeToRefs } from 'pinia';

import {
  PostPhotoViewer,
  PostViewerCloseButton,
} from '@/components';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';

// control popup store
const controlPopupStore = useControlPopupStore();
const { isFavoritePostViewerOpened, favoritePostToView } =
  storeToRefs(controlPopupStore);
const { setIsFavoritePostViewerOpened } = controlPopupStore;

// responsive store
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <div
    :class="[
      'viewer-popup',
      isFavoritePostViewerOpened
        ? 'viewer-popup--opened'
        : 'viewer-popup--closed',
    ]"
  >
    <div class="viewer-content">
      <PostViewerCloseButton
        :is-post-viewer-opened="isFavoritePostViewerOpened"
        :handle-close="
          () => setIsFavoritePostViewerOpened(false)
        "
      />
      <div
        :class="[
          'post-viewer-wrapper',
          isFavoritePostViewerOpened
            ? 'post-viewer-wrapper--appeared'
            : 'post-viewer-wrapper--disappeared',
        ]"
        :style="{
          padding: `${10 * currentScaleRatio}rem`,
          height: `calc(100vh - ${10 * currentScaleRatio}rem * 2)`,
          width: `calc(100vw - ${10 * currentScaleRatio}rem * 2)`,
        }"
      >
        <PostPhotoViewer
          v-if="favoritePostToView"
          :post="favoritePostToView"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.viewer-popup {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
}

.viewer-popup--opened {
  transition: backdrop-filter 0.5s ease;
  backdrop-filter: blur(1.5rem);
  visibility: visible;
}

.viewer-popup--closed {
  transition:
    visibility 0.5s 0.5s linear,
    backdrop-filter 0.5s linear;
  backdrop-filter: blur(0rem);
  visibility: hidden;
}

.viewer-content {
  position: relative;
}

.post-viewer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-viewer-wrapper--appeared {
  opacity: 1;
  transition: opacity 0.5s 0.5s linear;
}

.post-viewer-wrapper--disappeared {
  opacity: 0;
  transition: opacity 0.5s linear;
}
</style>
