<script setup lang="ts">
import animateScrollTo from 'animated-scroll-to';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import { useScrollWrapperStore } from '@/stores';

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
    @:click="navigateToTarget"
  >
    <h5 class="navigation-button__title font-bodoni72-bold">
      {{ name }}
    </h5>
  </button>
</template>

<style scoped>
.navigation-button {
  outline: none;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: background-color 0.25s linear;

  .navigation-button__title {
    text-align: start;
    line-height: 100%;
    letter-spacing: -0.125rem;
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
