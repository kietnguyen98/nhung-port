<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { useResponsiveStore } from '@/stores';

defineProps<{
  sectionId: string;
}>();

const title = ref<Array<string>>([
  'A',
  'b',
  'o',
  'u',
  't',
  'space',
  'm ',
  'e',
  'space',
]);

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
</script>

<template>
  <div
    :id="sectionId"
    class="about-section"
    :style="{
      top: `${-10 * currentScaleRatio}rem`,
    }"
  >
    <!-- background -->
    <img
      class="about-section__bg-image"
      src="/assets/images/about-me-bg.webp"
    />
    <!-- sub image -->
    <img
      src="/assets/images/rose-1.webp"
      class="about-section__sub-image about-section__flower"
      :style="{
        height: `${85 * currentScaleRatio}rem`,
        maxHeight: `${85 * currentScaleRatio}rem`,
        bottom: `${14.5 * currentScaleRatio}rem`,
        left: `${-9 * currentScaleRatio}rem`,
      }"
    />
    <!-- content -->
    <div
      class="content-container"
      :style="{
        padding: `0rem ${20 * currentScaleRatio}rem ${8 * currentScaleRatio}rem ${20 * currentScaleRatio}rem`,
      }"
    >
      <div
        id="about-content-wavy-title-container"
        class="wavy-title-container"
      >
        <h4
          v-for="(letter, index) in title"
          :key="letter"
          :style="`--i:${index}`"
          class="about-content__title font-iCeilBeCool"
        >
          {{ letter !== 'space' ? letter : '&nbsp;' }}
        </h4>
      </div>
      <div class="about-content__text-wrapper">
        <h5 class="font-iCeilBeCool">
          A 24 years old graphic designer with a potential
          attraction towards photography, illustration and a
          bit to motion graphic, <br />
          born in Hue City and living in Ho Chi Minh City
          with nearly 2 years of agency experience.
        </h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -6.25rem;

  .about-section__bg-image {
    width: 100%;
  }

  .about-section__sub-image {
    position: absolute;
  }

  .about-section__flower {
    z-index: 1;
  }
}

.content-container {
  position: absolute;
}

.wavy-title-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .about-content__title {
    text-align: center;
    animation: letter-wavy 1.5s infinite;
    animation-delay: calc(0.1s * var(--i));
  }
}

.about-content__text-wrapper {
  text-align: center;

  h5 {
    line-height: 120%;
  }
}
</style>
