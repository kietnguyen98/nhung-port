<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';
import { TProjectIdName } from '@/types';

defineProps<{
  projectIdName: TProjectIdName;
}>();

// responsive store
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>
<template>
  <!-- icons -->
  <img
    src="/assets/images/butterfly-2.webp"
    alt="butterfly 4"
    class="icon icon-butterfly-1"
    :style="{
      height: `${19.5 * currentScaleRatio}rem`,
      top: `${49 * currentScaleRatio}rem`,
      left: `${13 * currentScaleRatio}rem`,
    }"
  />
  <img
    src="/assets/images/butterfly-4.webp"
    alt="butterfly 4"
    class="icon icon-butterfly-2"
    :style="{
      height: `${19.5 * currentScaleRatio}rem`,
      top: `${7 * currentScaleRatio}rem`,
      right: `${8 * currentScaleRatio}rem`,
    }"
  />
  <!-- project title -->
  <img
    v-if="projectIdName === 'graphic-design'"
    src="/assets/images/popup/graphic-design/title.webp"
    alt="project view graphic design title"
    class="title title-entry-ani"
    :style="{
      height: `${24 * currentScaleRatio}rem`,
      top: `${22.5 * currentScaleRatio}rem`,
      left: `${13 * currentScaleRatio}rem`,
    }"
  />
  <img
    v-if="projectIdName === 'motion-graphic'"
    src="/assets/images/popup/motion-graphic/title.webp"
    alt="project view motion graphic title"
    class="title title-entry-ani"
    :style="{
      height: `${25.5 * currentScaleRatio}rem`,
      top: `${21 * currentScaleRatio}rem`,
      left: `${16 * currentScaleRatio}rem`,
    }"
  />
  <img
    v-if="projectIdName === 'photo-life-style'"
    src="/assets/images/popup/photo-life-style/title.webp"
    alt="project view photos life style title"
    class="title title-entry-ani"
    :style="{
      height: `${22.25 * currentScaleRatio}rem`,
      top: `${22.75 * currentScaleRatio}rem`,
      left: `${14.5 * currentScaleRatio}rem`,
    }"
  />
  <img
    v-if="projectIdName === 'illustration'"
    src="/assets/images/popup/illustration/title.webp"
    alt="project view photos life style title"
    class="title title-entry-ani"
    :style="{
      height: `${27 * currentScaleRatio}rem`,
      top: `${21 * currentScaleRatio}rem`,
      left: `${23.5 * currentScaleRatio}rem`,
    }"
  />
</template>

<style scoped>
.icon {
  position: absolute;
  z-index: 1;
}

.icon-butterfly-1 {
  animation: bubble-bounce infinite 2.5s ease-in-out;
}

.icon-butterfly-2 {
  animation: bubble-bounce infinite 3.5s ease-in-out;
}
.title {
  z-index: 9;
  position: absolute;
}

.title-entry-ani {
  opacity: 0;
  animation: flip-x 1.5s ease-in-out forwards;
  animation-delay: 0.75s;
  transform-style: preserve-3d;
}
</style>
