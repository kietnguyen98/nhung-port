<script setup lang="ts">
import animateScrollTo from 'animated-scroll-to';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import {
  useResponsiveStore,
  useScrollWrapperStore,
} from '@/stores';

const props = defineProps<{
  idName: string;
  name: string;
  isActive: boolean;
  isScrolled: boolean;
}>();

const diffOffset = ref<number>(0);
const navigateToTarget = ref<() => void>();

// scroll wrapper store
const scrollWrapperStore = useScrollWrapperStore();
const { containerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);

// responsive store
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);

watch(
  containerScrollWrapper,
  (newContainerScrollWrapper) => {
    if (newContainerScrollWrapper) {
      const targetElement = document.getElementById(
        `${props.idName}-section`
      ) as HTMLElement;

      // initial offset value, handler function
      diffOffset.value = Math.abs(
        newContainerScrollWrapper.scrollTop -
          targetElement.offsetTop
      );

      navigateToTarget.value = () => {
        animateScrollTo(targetElement.offsetTop, {
          cancelOnUserAction: true,
          easing: (t) => {
            return --t * t * t * t * t + 1;
          },
          minDuration:
            ((diffOffset.value > 0
              ? diffOffset.value
              : 1000) /
              1000) *
            1500,
          elementToScroll: newContainerScrollWrapper,
        });
      };

      // update new offset value and new handler function on scrolling
      newContainerScrollWrapper.addEventListener(
        'scroll',
        () => {
          diffOffset.value = Math.abs(
            newContainerScrollWrapper.scrollTop -
              targetElement.offsetTop
          );

          navigateToTarget.value = () => {
            animateScrollTo(targetElement.offsetTop, {
              cancelOnUserAction: true,
              easing: (t) => {
                return --t * t * t + 1;
              },
              minDuration: Math.min(
                ((diffOffset.value !== 0
                  ? diffOffset.value
                  : 1000) /
                  1000) *
                  1250,
                3000
              ),
              elementToScroll: newContainerScrollWrapper,
            });
          };
        }
      );
    }
  }
);
</script>

<template>
  <button
    :class="[
      'navigation-button',
      isActive && 'navigation-button--activated',
    ]"
    :style="{
      padding: `${0.25 * currentScaleRatio}rem ${0.5 * currentScaleRatio}rem`,
      borderRadius: `${0.5 * currentScaleRatio}rem`,
    }"
    @:click="navigateToTarget"
  >
    <h5
      class="navigation-button__title font-bodoni72-bold"
      :style="{
        letterSpacing: `${-0.125 * currentScaleRatio}rem`,
      }"
    >
      {{ name }}
    </h5>
  </button>
</template>

<style scoped>
.navigation-button {
  outline: none;
  border: none;
  background-color: transparent;
  transition: background-color 0.25s linear;

  .navigation-button__title {
    text-align: start;
    line-height: 100%;
    color: var(--color-dark);
    text-transform: lowercase;
    transition: color 0.25s linear;
  }

  &:hover {
    background-color: var(--color-dark);
  }

  &:hover > .navigation-button__title {
    color: var(--color-white);
  }
}

.navigation-button--activated {
  background-color: var(--color-dark);

  .navigation-button__title {
    color: var(--color-white);
  }
}
</style>
