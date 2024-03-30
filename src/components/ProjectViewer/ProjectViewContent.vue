<script setup lang="ts">
import { useResponsiveStore } from '@/stores';
import { TProjectIdName } from '@/types';

import {
  ProjectContentGraphicDesign,
  ProjectContentIllustration,
  ProjectContentMotionGraphic,
  ProjectContentPhotoLifeStyle,
} from './ProjectContent';

defineProps<{
  projectIdName: TProjectIdName;
}>();

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = responsiveStore;
</script>

<template>
  <div
    class="project-view-content"
    :style="{
      top: `${56 * currentScaleRatio}rem`,
    }"
  >
    <ProjectContentGraphicDesign
      v-if="projectIdName === 'graphic-design'"
    />
    <ProjectContentIllustration
      v-if="projectIdName === 'illustration'"
    />
    <ProjectContentMotionGraphic
      v-if="projectIdName === 'motion-graphic'"
    />
    <ProjectContentPhotoLifeStyle
      v-if="projectIdName === 'photo-life-style'"
    />
  </div>
</template>

<style scoped>
.project-view-content {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
