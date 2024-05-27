<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import { useScrollingDebounce } from '@/hooks';
import {
  usePostViewScrollingStore,
  useResponsiveStore,
  useScrollWrapperStore,
} from '@/stores';
import { TPost } from '@/types';

defineProps<{
  posts?: Array<TPost>;
  handleSlideToSpecificPost: (postIndex: number) => void;
}>();

// view scrolling store
const viewScrollingStore = usePostViewScrollingStore();
const { progress } = storeToRefs(viewScrollingStore);

// scroll wrapper store
const scrollWrapperStore = useScrollWrapperStore();
const { postViewerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);

const mediaQueriesStore = useResponsiveStore();
const {
  currentScaleRatio,
  currentViewWidth,
  currentViewHeight,
} = storeToRefs(mediaQueriesStore);

const { isScrolling } = useScrollingDebounce({
  scrollWrapperElement:
    postViewerScrollWrapper.value as HTMLElement,
  debounceTime: 500,
});

// the indicator of post viewer will be 5rem height in 2560px or larger
const INDICATOR_POST_HEIGHT = 5;

const VIEWER_CONTAINER_PADDING_Y_VALUE = 10;

// calculate indicator size ratio
// ratio = INDICATOR_POST_HEIGHT * currentScaleRatioValue / (currentViewHeightValue / 16 (must divide by 16 to change to rem in px) - 10 * currentScaleRatio * 2 (padding Y))
const indicatorPostToViewerPostSizeRatio = ref<number>(
  (INDICATOR_POST_HEIGHT * currentScaleRatio.value) /
    (currentViewHeight.value / 16 -
      VIEWER_CONTAINER_PADDING_Y_VALUE *
        currentScaleRatio.value *
        2)
);

watch(
  [currentScaleRatio, currentViewHeight],
  ([newCurrentScaleRatio, newCurrentViewHeight]) => {
    indicatorPostToViewerPostSizeRatio.value =
      (INDICATOR_POST_HEIGHT * newCurrentScaleRatio) /
      (newCurrentViewHeight / 16 -
        VIEWER_CONTAINER_PADDING_Y_VALUE *
          newCurrentScaleRatio *
          2);
  }
);
</script>

<template>
  <div
    :class="[
      'indicator-container',
      isScrolling
        ? 'indicator-container--appeared'
        : 'indicator-container--appeared',
    ]"
  >
    <div
      v-if="posts && posts.length > 0"
      class="indicator"
      :style="{
        padding: `${1 * currentScaleRatio}rem ${1.5 * currentScaleRatio}rem`,
      }"
    >
      <div
        class="view-section"
        :style="{
          height: `${(currentViewHeight / 16) * indicatorPostToViewerPostSizeRatio}rem`,
          top: `calc(${1 * currentScaleRatio}rem - ${VIEWER_CONTAINER_PADDING_Y_VALUE * currentScaleRatio * indicatorPostToViewerPostSizeRatio}rem)`,
          width: `${(currentViewWidth / 16) * indicatorPostToViewerPostSizeRatio}rem`,
          // left = current padding left - view section border width + (full indicator posts width - view section width) * progress / 100
          // + current padding left = current post padding left
          left: `calc(
                  ${1.5 * currentScaleRatio}rem 
                  - ${5 * currentScaleRatio * indicatorPostToViewerPostSizeRatio}rem
                  + (100% - (${1.5 * currentScaleRatio}rem * 2 - ${5 * currentScaleRatio * indicatorPostToViewerPostSizeRatio}rem * 2) - ${(currentViewWidth / 16) * indicatorPostToViewerPostSizeRatio}rem) * (${progress} / 100)
                  )`,
        }"
      >
        <div class="section-popover">
          <div
            class="section-popover__title"
            :style="{
              top: `${(progress === 0 ? -11.25 : -4.5) * currentScaleRatio}rem`,
              left: `${-0.5 * currentScaleRatio}rem`,
              height: `${(progress === 0 ? 10 : 3.25) * currentScaleRatio}rem`,
              padding: `${0.25 * currentScaleRatio}rem ${0.5 * currentScaleRatio}rem`,
            }"
          >
            <span v-if="progress === 0"
              >Wheel your mouse or click on any specific
              image to watch!</span
            >
            <span v-if="progress < 100 && progress > 0"
              >You are here!</span
            >
            <span v-if="progress === 100"
              >End of list!</span
            >
          </div>
        </div>
      </div>
      <div
        class="post-wrapper"
        :style="{
          height: `${INDICATOR_POST_HEIGHT * currentScaleRatio}rem`,
          // indicator post image gap = current post image gap * current indicator height (in pixel) / view height (in pixel)
          gap: `${5 * currentScaleRatio * indicatorPostToViewerPostSizeRatio}rem`,
        }"
      >
        <img
          v-for="(post, index) in posts"
          :key="post.sourceUrl"
          v-lazy="post.sourceUrl"
          :alt="'post image ' + post.sourceUrl"
          class="post-wrapper__post-image"
          @click="handleSlideToSpecificPost(index)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.indicator-container {
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0.25rem;
}

.indicator-container--appeared {
  transition:
    opacity 0.25s linear,
    transform 0.25s linear;
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.indicator-container--disappeared {
  transition:
    opacity 0.25s linear,
    transform 0.25s linear,
    visibility 0s 0.25s linear;
  transform: translateY(5rem);
  opacity: 0;
  visibility: hidden;
}

.indicator {
  position: relative;
}

.view-section {
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  transition: all 0.5s ease-out;
}

.section-popover {
  position: relative;
  width: 100%;
  height: 100%;

  .section-popover__title {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-dark);
    color: var(--color-cream);
    text-align: center;
    border-radius: 0.5rem;
    font-weight: bolder;
  }
}

.section-popover::after {
  content: '';
  position: absolute;
  top: calc(-4rem + 3rem + 0.25rem - 0.125rem);
  left: calc(50% - 0.5rem);
  border-left: 0.75rem solid transparent;
  border-right: 0.75rem solid transparent;
  border-top: 0.75rem solid var(--color-dark);
}

.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .post-wrapper__post-image {
    border-radius: 0.125rem;
    width: 100%;
    transition: scale 0.15s linear;

    &:hover {
      scale: 1.1;
    }
  }
}
</style>
