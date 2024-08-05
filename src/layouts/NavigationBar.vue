<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { NavigationButton } from '@/components';
import { useResponsiveStore } from '@/stores';
import { TSections } from '@/types';
defineProps<{
  isOnTop: boolean;
  sections: TSections;
  currentActive: string;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
</script>

<template>
  <div
    :class="[
      'navigation-bar-container',
      'navigation-bar-enter-animation',
      !isOnTop && 'navigation-bar-container--on-scrolled',
    ]"
    :style="{
      marginTop: `${7 * currentScaleRatio}rem`,
    }"
  >
    <div class="navigation-bar-wrapper">
      <img
        src="/assets/images/navigation-bar-logo.webp"
        alt="navigation bar logo"
        class="navigation-bar__logo"
        :style="{
          height: `${15 * currentScaleRatio}rem`,
          maxHeight: `${15 * currentScaleRatio}rem`,
        }"
      />
      <div
        class="navigation-button-container"
        :style="{
          padding: `${0.5 * currentScaleRatio}rem 0rem`,
        }"
      >
        <NavigationButton
          :key="sections[0].idName"
          :id-name="sections[0].idName"
          :name="sections[0].name"
          :is-active="sections[0].idName === currentActive"
          :is-scrolled="!isOnTop"
        />
        <NavigationButton
          :key="sections[1].idName"
          :id-name="sections[1].idName"
          :name="sections[1].name"
          :is-active="sections[1].idName === currentActive"
          :is-scrolled="!isOnTop"
        />
        <div
          class="blank-space"
          :style="{
            height: `100%`,
            width: `${(15 * currentScaleRatio * 1024) / 648}rem`,
          }"
        ></div>
        <NavigationButton
          :key="sections[2].idName"
          :id-name="sections[2].idName"
          :name="sections[2].name"
          :is-active="sections[2].idName === currentActive"
          :is-scrolled="!isOnTop"
        />
        <NavigationButton
          :key="sections[3].idName"
          :id-name="sections[3].idName"
          :name="sections[3].name"
          :is-active="sections[3].idName === currentActive"
          :is-scrolled="!isOnTop"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation-bar-container {
  width: 95vw;
  position: absolute;
  left: 2.5vw;
  z-index: 2;
  transition: backdrop-filter 0.25s linear;

  .navigation-bar-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navigation-bar__logo {
    position: absolute;
  }

  .navigation-button-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 0.2rem solid var(--color-dark);
    border-bottom: 0.2rem solid var(--color-dark);
  }
}

.navigation-bar-container--on-scrolled {
  backdrop-filter: blur(1rem);
}

.navigation-bar-enter-animation {
  opacity: 0;
  animation: fade-in-from-top 1.5s linear forwards;
}
</style>
