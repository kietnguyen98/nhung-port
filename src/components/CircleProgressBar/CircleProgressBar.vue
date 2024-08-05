<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

const props = defineProps<{ progressValue: number }>();

// responsive store
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <div
    class="progress-bar progress-bar--enter-ani"
    :style="{
      background: `radial-gradient(
            closest-side,
            var(--color-white) 79%,
            transparent 80% 100%
        ),
        conic-gradient(var(--color-purple) ${props.progressValue}%, var(--color-pink) 0)`,
      width: `${6 * Math.max(currentScaleRatio, 0.5)}rem`,
      height: `${6 * Math.max(currentScaleRatio, 0.5)}rem`,
      bottom: `${3 * Math.max(currentScaleRatio, 0.3)}rem`,
      right: `${3 * Math.max(currentScaleRatio, 0.3)}rem`,
      padding: `${1 * Math.max(currentScaleRatio, 0.5)}rem`,
    }"
  >
    <div
      class="flower-wrapper"
      :style="{
        width: `${5 * Math.max(currentScaleRatio, 0.5)}rem`,
        height: `${5 * Math.max(currentScaleRatio, 0.5)}rem`,
      }"
    >
      <img
        :class="{
          leaves: true,
          'leaves--glowed': props.progressValue === 100,
        }"
        :style="{
          width: `${6 * Math.max(currentScaleRatio, 0.5)}rem`,
          height: `${6 * Math.max(currentScaleRatio, 0.5)}rem`,
        }"
        src="/assets/icons/leaves.webp"
        alt="flower's leave"
      />
      <img
        class="flower"
        src="/assets/icons/flower.webp"
        alt="flower"
        :style="{
          transform: `rotateZ(${(props.progressValue / 100) * 360}deg)`,
        }"
      />
      <img
        :class="{
          'face-happy': true,
          'face-happy--disappeared':
            props.progressValue === 100,
        }"
        src="/assets/icons/happy.webp"
        alt="emotion"
        :style="{
          width: `${2.5 * Math.max(currentScaleRatio, 0.5)}rem`,
          height: `${2.5 * Math.max(currentScaleRatio, 0.5)}rem`,
          top: `calc(50% - ${2.5 * Math.max(currentScaleRatio, 0.5)}rem / 2)`,
          left: `calc(50% - ${2.5 * Math.max(currentScaleRatio, 0.5)}rem / 2)`,
        }"
      />
      <img
        :class="{
          'face-laughing': true,
          'face-laughing--appeared':
            props.progressValue === 100,
        }"
        src="/assets/icons/laughing.webp"
        alt="emotion"
        :style="{
          width: `${2.5 * Math.max(currentScaleRatio, 0.5)}rem`,
          height: `${2.5 * Math.max(currentScaleRatio, 0.5)}rem`,
          top: `calc(50% - ${2.5 * Math.max(currentScaleRatio, 0.5)}rem / 2)`,
          left: `calc(50% - ${2.5 * Math.max(currentScaleRatio, 0.5)}rem / 2)`,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 40px 10px
    rgba(255, 46, 182, 0.45);
  -moz-box-shadow: 0px 0px 40px 10px
    rgba(255, 46, 182, 0.45);
  box-shadow: 0px 0px 40px 10px rgba(255, 46, 182, 0.45);
}

.progress-bar--enter-ani {
  transform: scale(0);
  opacity: 0;
  /* animation */
  animation: scale-out 1.5s ease forwards;
}
.flower-wrapper {
  position: relative;

  .leaves {
    position: absolute;
    top: -0.6rem;
    left: 0rem;
    z-index: 1;
    transform: scale(0);
    opacity: 0;
    transition: all 1s linear;
  }

  .leaves--glowed {
    opacity: 1;
    transform: scale(1.25);
  }
  .flower {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .face-happy {
    position: absolute;
    z-index: 4;
    transform: rotateZ(22.5deg);
    opacity: 1;
    transition: all 0.75s linear;
  }

  .face-happy--disappeared {
    opacity: 0.5;
    z-index: 3;
  }

  .face-laughing {
    position: absolute;
    z-index: 3;
    opacity: 0.5;
    transition: all 0.75s linear;
  }

  .face-laughing--appeared {
    opacity: 1;
    z-index: 4;
  }
}
</style>
