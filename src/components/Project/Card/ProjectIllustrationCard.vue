<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useHover } from '@/hooks';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';

const outerImageUrl =
  projectMockData.illustration?.outerImageUrl;

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
    class="project-illustration-card"
    :style="{
      height: `${82.5 * currentScaleRatio}rem`,
      maxHeight: `${82.5 * currentScaleRatio}rem`,
      transform: `translateY(${(isHover ? 21.5 : 25) * currentScaleRatio}rem) translateX(${-2.5 * currentScaleRatio}rem)`,
    }"
  >
    <img
      src="/assets/images/project-illustration-frame.webp"
      alt="project illustration frame"
      class="illustration__frame"
    />
    <img
      src="/assets/images/butterfly-1.webp"
      alt="butterfly 1"
      class="illustration__sub-image-butterfly"
      :style="{
        height: `${22.5 * currentScaleRatio}rem`,
        left: `${-25.5 * currentScaleRatio}rem`,
        bottom: `${16 * currentScaleRatio}rem`,
      }"
    />
    <div
      class="illustration__outer-image"
      :style="{
        backgroundImage: `url(${outerImageUrl})`,
        backgroundSize: `${isHover ? '112%' : '102%'}`,
        height: `${45 * currentScaleRatio}rem`,
        width: `${43.5 * currentScaleRatio}rem`,
        top: `${21.25 * currentScaleRatio}rem`,
        left: `${9 * currentScaleRatio}rem`,
      }"
    ></div>
    <!-- adding an overlay to handle user event -->
    <div
      ref="refElement"
      class="illustration__outer-image-overlay"
      :style="{
        height: `${45 * currentScaleRatio}rem`,
        width: `${43.5 * currentScaleRatio}rem`,
        top: `${21.25 * currentScaleRatio}rem`,
        left: `${9 * currentScaleRatio}rem`,
      }"
      @click="
        () => {
          setIsProjectViewerOpened(true);
          setProjectToView(projectMockData.illustration);
        }
      "
    ></div>
  </div>
</template>

<style scoped>
.project-illustration-card {
  transition: transform 0.5s ease-out;
  position: relative;

  .illustration__frame {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .illustration__sub-image-butterfly {
    position: absolute;
  }

  .illustration__outer-image {
    transform: rotateZ(9deg);
    position: absolute;
    z-index: 0;
    transition: background-size 0.5s linear;

    /* background image settings */
    background-color: var(--color-dark);
    background-position: center;
    background-repeat: no-repeat;
  }

  .illustration__outer-image-overlay {
    cursor: pointer;
    transform: rotateZ(9deg);
    position: absolute;
    z-index: 2;
  }
}
</style>
