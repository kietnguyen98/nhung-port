<script setup lang="ts">
import { storeToRefs } from 'pinia';

import {
  FavoritePosts,
  ProjectAnimationCard,
  ProjectGraphicDesignCard,
  ProjectIllustrationCard,
  ProjectPhotosCard,
} from '@/components';
import {
  PostViewerPopup,
  ProjectViewerPopup,
} from '@/layouts';
import { useResponsiveStore } from '@/stores';
import { ProjectView } from '@/views';
defineProps<{
  sectionId: string;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
</script>

<template>
  <div
    :id="sectionId"
    class="projects-section"
    :style="{
      top: `${-17.5 * currentScaleRatio}rem`,
    }"
  >
    <div class="projects-section__title-and-cards">
      <img
        src="/assets/images/project-section-line-bg.png"
        alt="project section line background"
        class="projects-section__line-bg"
        :style="{
          height: `${217.5 * currentScaleRatio}rem`,
          maxHeight: `${217.5 * currentScaleRatio}rem`,
          top: `${13 * currentScaleRatio}rem`,
        }"
      />
      <div class="title">
        <img
          src="/assets/images/view-all-project-bg.png"
          alt="view all my works title"
          :style="{
            height: `${27.5 * currentScaleRatio}rem`,
          }"
        />
        <img
          src="/assets/images/butterfly-4.png"
          alt="butterfly 4"
          class="title__butterfly"
          :style="{
            height: `${25 * currentScaleRatio}rem`,
            top: `${17.5 * currentScaleRatio}rem`,
            right: `${-32.5 * currentScaleRatio}rem`,
          }"
        />
      </div>
      <div class="project-cards">
        <div class="project-cards__row">
          <div class="project-card-enter-ani">
            <ProjectGraphicDesignCard />
          </div>
          <div class="project-card-enter-ani">
            <ProjectAnimationCard />
          </div>
        </div>
        <div class="project-cards__row">
          <div class="project-card-enter-ani">
            <ProjectPhotosCard />
          </div>
          <div class="project-card-enter-ani">
            <ProjectIllustrationCard />
          </div>
        </div>
      </div>
    </div>
    <div>
      <FavoritePosts />
    </div>
  </div>
  <!-- project view detail -->
  <ProjectViewerPopup>
    <ProjectView></ProjectView>
  </ProjectViewerPopup>
  <!-- post view detail -->
  <PostViewerPopup />
</template>

<style scoped>
.projects-section {
  position: relative;
}

.projects-section__title-and-cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .projects-section__line-bg {
    position: absolute;
  }
}

.title {
  position: relative;

  .title__butterfly {
    position: absolute;
  }
}

.project-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .project-cards__row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
