<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { defineAsyncComponent } from 'vue';

import {
  FavoritePosts,
  ProjectAnimationCard,
  ProjectGraphicDesignCard,
  ProjectIllustrationCard,
  ProjectPhotosCard,
} from '@/components';
import { useResponsiveStore } from '@/stores';

const ProjectViewerPopup = defineAsyncComponent(
  () => import('@/layouts/ProjectViewerPopup.vue')
);

const FavoritePostViewPopup = defineAsyncComponent(
  () => import('@/layouts/FavoritePostViewPopup.vue')
);

const PostViewerPopup = defineAsyncComponent(
  () => import('@/layouts/PostViewerPopup.vue')
);

const ProjectView = defineAsyncComponent(
  () => import('@/views/projectContents/ProjectView.vue')
);

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
        src="/assets/images/project-section-line-bg.webp"
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
          src="/assets/images/view-all-project-bg.webp"
          alt="view all my works title"
          :style="{
            height: `${27.5 * currentScaleRatio}rem`,
          }"
        />
        <img
          src="/assets/images/butterfly-4.webp"
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
  <!-- favorite post view detail -->
  <FavoritePostViewPopup />
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
