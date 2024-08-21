<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

defineProps<{
  isPostViewerOpened: boolean;
  handleClose: () => void;
}>();
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <button
    type="button"
    :class="[
      'close-button',
      isPostViewerOpened
        ? 'close-button--appeared'
        : 'close-button--disappeared',
    ]"
    :style="{
      top: `${Math.max(1, 2 * currentScaleRatio)}rem`,
      right: `${Math.max(1.5, 3 * currentScaleRatio)}rem`,
      width: `${Math.max(2, 4 * currentScaleRatio)}rem`,
      height: `${Math.max(2, 4 * currentScaleRatio)}rem`,
      fontSize: `${Math.max(1, 2 * currentScaleRatio)}rem`,
    }"
    @click="handleClose"
  >
    X
  </button>
</template>

<style scoped>
.close-button {
  position: fixed;
  z-index: 1;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: var(--color-dark);
  color: var(--color-cream);
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.close__close-button--appeared {
  transform: rotateZ(0deg) scale(1);
  transition: transform 0.5s 0.5s linear;
}

.close-button--disappeared {
  transform: rotateZ(-360deg) scale(0);
  transition: transform 0.5s linear;
}
</style>
