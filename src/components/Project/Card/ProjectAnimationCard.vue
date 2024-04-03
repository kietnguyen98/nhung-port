<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useHover } from '@/hooks';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';

const outerImageUrl =
  projectMockData.motionGraphic?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);

const controlPopupStore = useControlPopupStore();
const { setIsProjectViewerOpened, setProjectToView } =
  controlPopupStore;

const { refElement, isHover } = useHover();
</script>

<template>
  <div
    class="animation-card"
    :style="{
      height: `${87.5 * currentScaleRatio}rem`,
      maxHeight: `${87.5 * currentScaleRatio}rem`,
      transform: `translateY(${(isHover ? 26.5 : 30) * currentScaleRatio}rem) translateX(${2 * currentScaleRatio}rem)`,
    }"
  >
    <img
      src="/assets/images/project-animation-frame.webp"
      alt="project animation frame"
      class="animation__frame"
    />
    <div
      class="animation__outer-image"
      :style="{
        backgroundImage: `url(${outerImageUrl})`,
        backgroundSize: `${isHover ? '113%' : '103%'}`,
        height: `${45 * currentScaleRatio}rem`,
        width: `${43 * currentScaleRatio}rem`,
        top: `${9.25 * currentScaleRatio}rem`,
        left: `${11.5 * currentScaleRatio}rem`,
      }"
    ></div>
    <!-- adding an overlay to handle user event -->
    <div
      ref="refElement"
      class="animation__outer-image-overlay"
      :style="{
        height: `${45 * currentScaleRatio}rem`,
        width: `${43 * currentScaleRatio}rem`,
        top: `${9.25 * currentScaleRatio}rem`,
        left: `${11.5 * currentScaleRatio}rem`,
      }"
      @click="
        () => {
          setIsProjectViewerOpened(true);
          setProjectToView(projectMockData.motionGraphic);
        }
      "
    ></div>
  </div>
</template>

<style scoped>
.animation-card {
  transition: transform 0.5s ease-out;

  .animation__frame {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .animation__outer-image {
    position: absolute;
    transform: rotateZ(14.5deg);
    transition: background-size 0.5s linear;
    z-index: 0;

    /* background image settings */
    background-color: var(--color-dark);
    background-position: center;
    background-repeat: no-repeat;
  }

  .animation__outer-image-overlay {
    position: absolute;
    transform: rotateZ(14.5deg);
    z-index: 2;
  }
}
</style>
