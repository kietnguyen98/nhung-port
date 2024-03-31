<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useHover } from '@/hooks';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';
const outerImageUrl =
  projectMockData.photoLifeStyle?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);

const controlPopupStore = useControlPopupStore();
const { setIsPopupOpened, setProjectToView } =
  controlPopupStore;

const { refElement, isHover } = useHover();
</script>

<template>
  <div
    class="project-photo-card"
    :style="{
      height: `${80 * currentScaleRatio}rem`,
      maxHeight: `${80 * currentScaleRatio}rem`,
      transform: `translateY(${(isHover ? -6.5 : -3) * currentScaleRatio}rem) translateX(${-4 * currentScaleRatio}rem)`,
    }"
  >
    <img
      src="/assets/images/project-photos-frame.png"
      alt="project photos frame"
      class="photos__frame"
    />
    <img
      src="/assets/images/butterfly-3.png"
      alt="butterfly 3"
      class="photos__sub-image-butterfly"
      :style="{
        height: `${27.5 * currentScaleRatio}rem`,
        left: `${6.5 * currentScaleRatio}rem`,
        top: `${-18.5 * currentScaleRatio}rem`,
      }"
    />
    <div
      class="photos__outer-image"
      :style="{
        backgroundImage: `url(${outerImageUrl})`,
        backgroundSize: `${isHover ? '110%' : '100%'}`,
        height: `${43.75 * currentScaleRatio}rem`,
        width: `${42.25 * currentScaleRatio}rem`,
        top: `${12.5 * currentScaleRatio}rem`,
        left: `${18.75 * currentScaleRatio}rem`,
      }"
    ></div>
    <!-- adding an overlay to handle user event -->
    <div
      ref="refElement"
      class="photos__outer-image-overlay"
      :style="{
        height: `${43.75 * currentScaleRatio}rem`,
        width: `${42.25 * currentScaleRatio}rem`,
        top: `${12.5 * currentScaleRatio}rem`,
        left: `${18.75 * currentScaleRatio}rem`,
      }"
      @click="
        () => {
          setIsPopupOpened(true);
          setProjectToView(projectMockData.photoLifeStyle);
        }
      "
    ></div>
  </div>
</template>

<style scoped>
.project-photo-card {
  transition: transform 0.5s ease-out;
  position: relative;

  .photos__frame {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .photos__sub-image-butterfly {
    position: absolute;
    height: 17.5rem;
    left: 5rem;
    top: -10rem;
  }

  .photos__outer-image {
    position: absolute;
    z-index: 0;
    transform: rotateZ(-21deg);
    transition: background-size 0.5s linear;

    /* background image settings */
    background-color: var(--color-dark);
    background-position: center;
    background-repeat: no-repeat;
  }

  .photos__outer-image-overlay {
    position: absolute;
    transform: rotateZ(-21deg);
    z-index: 2;
  }
}
</style>
