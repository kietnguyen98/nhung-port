<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import {
  PostPhotoViewer,
  PostViewerCloseButton,
  PostViewerIndicator,
} from '@/components';
import {
  useControlPopupStore,
  usePostViewScrollingStore,
  useResponsiveStore,
  useScrollWrapperStore,
} from '@/stores';
import {
  animateScroll,
  animateWheelEvent,
} from '@/utilities';

// control popup
const popupStore = useControlPopupStore();
const { isPostViewerOpened, brandToView } =
  storeToRefs(popupStore);
const { setIsPostViewerOpened, setBrandToView } =
  popupStore;

// view scrolling progress
const viewScrollingStore = usePostViewScrollingStore();
const { setViewProgress } = viewScrollingStore;

// media query for responsive
const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);

// scroll wrapper control
const scrollWrapperStore = useScrollWrapperStore();
const { postViewerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);
const { setPostViewerScrollWrapper } = scrollWrapperStore;

const postViewerScrollWrapperRef = ref<HTMLElement>();
const postViewerContainerRef = ref<HTMLElement>();
const handlePostViewerWheelEvent =
  ref<(e: WheelEvent) => void>();
const handlePostViewerScrollEvent =
  ref<(e?: Event) => void>();

watch(
  postViewerScrollWrapperRef,
  (newPostViewerScrollWrapperRef) => {
    if (newPostViewerScrollWrapperRef) {
      setPostViewerScrollWrapper(
        newPostViewerScrollWrapperRef
      );
    }
  }
);

watch(
  [postViewerScrollWrapper, currentScaleRatio],
  ([newPostViewerScrollWrapper, newCurrentScaleRatio]) => {
    if (newPostViewerScrollWrapper) {
      handlePostViewerWheelEvent.value = (e: WheelEvent) =>
        animateWheelEvent({
          event: e,
          wheelSpeed: 8 * newCurrentScaleRatio,
          wheelDirection: 'horizontal',
          scrollWrapperElement: newPostViewerScrollWrapper,
          shouldAnimate: true,
        });

      handlePostViewerScrollEvent.value = () => {
        const fullScrollWrapperWidth =
          newPostViewerScrollWrapper.scrollWidth;
        const currentScrollOffsetLeft =
          newPostViewerScrollWrapper.scrollLeft;
        const currentScreenViewWidth =
          newPostViewerScrollWrapper.clientWidth;

        setViewProgress(
          Math.ceil(
            (currentScrollOffsetLeft /
              (fullScrollWrapperWidth -
                currentScreenViewWidth)) *
              100
          )
        );
      };
    }
  }
);

watch(
  [
    isPostViewerOpened,
    postViewerScrollWrapper,
    handlePostViewerWheelEvent,
    handlePostViewerScrollEvent,
  ],
  ([
    newIsPostViewerOpened,
    newPostViewerScrollWrapperElement,
    newHandlePostViewerWheelEvent,
    newHandlePostViewerScrollEvent,
  ]) => {
    if (
      newPostViewerScrollWrapperElement &&
      newHandlePostViewerWheelEvent &&
      newHandlePostViewerScrollEvent
    ) {
      if (newIsPostViewerOpened) {
        // open popup
        postViewerScrollWrapper.value?.scrollTo({
          top: 0,
        });

        newPostViewerScrollWrapperElement.addEventListener(
          'wheel',
          newHandlePostViewerWheelEvent,
          { passive: false }
        );

        newPostViewerScrollWrapperElement.addEventListener(
          'scroll',
          newHandlePostViewerScrollEvent,
          {
            passive: false,
          }
        );
      } else {
        // close popup
        newPostViewerScrollWrapperElement.removeEventListener(
          'wheel',
          newHandlePostViewerWheelEvent
        );

        newPostViewerScrollWrapperElement.removeEventListener(
          'scroll',
          newHandlePostViewerScrollEvent
        );

        // reset viewer progress to 0
        setTimeout(() => {
          // wait for popup totally closed
          setViewProgress(0);
        }, 1000);
      }
    }
  }
);

// reset scroll position when close popup
const handleClosePostViewer = () => {
  setIsPostViewerOpened(false);
  setTimeout(() => {
    setBrandToView(undefined);
  }, 1000);
};

// scroll to any post view when user chose specific post on indicator
const slideToSpecificPost = (postIndex: number) => {
  const postToSlide = postViewerContainerRef.value
    ?.children[postIndex] as HTMLElement;
  const targetLeft = postToSlide.offsetLeft;
  const targetAlignLeftToView =
    (window.innerWidth - postToSlide.clientWidth) / 2;

  animateScroll({
    scrollPosition: targetLeft - targetAlignLeftToView,
    wheelDirection: 'horizontal',
    scrollWrapperElement:
      postViewerScrollWrapper.value as HTMLElement,
  });
};
</script>

<template>
  <div
    :class="[
      'viewer-popup',
      isPostViewerOpened
        ? 'viewer-popup--opened'
        : 'viewer-popup--closed',
    ]"
  >
    <div class="viewer-content">
      <PostViewerCloseButton
        :is-post-viewer-opened="isPostViewerOpened"
        :handle-close="handleClosePostViewer"
      />
      <div
        v-if="!brandToView?.posts.length"
        :class="[
          'empty-post',
          isPostViewerOpened
            ? 'empty-post--appeared'
            : 'empty-post--disappeared',
        ]"
      >
        <h1>There is nothing here !</h1>
      </div>
      <div
        v-if="brandToView?.posts.length"
        ref="postViewerScrollWrapperRef"
        :class="[
          'posts-wrapper',
          isPostViewerOpened
            ? 'posts-wrapper--appeared'
            : 'posts-wrapper--disappeared',
        ]"
        :style="{
          padding: `${10 * currentScaleRatio}rem ${5 * currentScaleRatio}rem`,
          height: `calc(100vh - ${10 * currentScaleRatio}rem * 2)`,
          width: `calc(100vw - ${5 * currentScaleRatio}rem * 2)`,
        }"
      >
        <div
          ref="postViewerContainerRef"
          class="post-photo-viewer-container"
          :style="{
            height: `calc(100vh - ${10 * currentScaleRatio}rem * 2)`,
          }"
        >
          <PostPhotoViewer
            v-for="post in brandToView.posts"
            :key="post.sourceUrl"
            :post="post"
          />
        </div>
      </div>
      <div
        :class="[
          'viewer-content__viewer-indicator',
          isPostViewerOpened
            ? 'viewer-content__viewer-indicator--appeared'
            : 'viewer-content__viewer-indicator--disappeared',
        ]"
      >
        <PostViewerIndicator
          :posts="brandToView?.posts"
          :handle-slide-to-specific-post="
            slideToSpecificPost
          "
        />
      </div>
    </div>
  </div>
</template>

<style scope>
.viewer-popup {
  position: absolute;
  z-index: 40;
  top: 0;
  left: 0;
}

.viewer-popup--opened {
  transition: backdrop-filter 0.5s ease;
  backdrop-filter: blur(1.5rem);
  visibility: visible;
}

.viewer-popup--closed {
  transition:
    visibility 0.5s 0.5s linear,
    backdrop-filter 0.5s linear;
  backdrop-filter: blur(0rem);
  visibility: hidden;
}

.viewer-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .viewer-content__viewer-indicator {
    position: fixed;
    bottom: 1rem;
    z-index: 1;
  }

  .viewer-content__viewer-indicator--appeared {
    opacity: 1;
    transition: opacity 0.5s 0.5s linear;
  }

  .viewer-content__viewer-indicator--disappeared {
    opacity: 0;
    transition: opacity 0.5s linear;
  }
}

.posts-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  /* hiding scroll bar */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.posts-wrapper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.posts-wrapper--appeared {
  opacity: 1;
  transition: opacity 0.5s 0.5s linear;
}

.posts-wrapper--disappeared {
  opacity: 0;
  transition: opacity 0.5s linear;
}

.post-photo-viewer-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.empty-post {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-post--appeared {
  opacity: 1;
  transition: opacity 0.5s linear;
}

.empty-post--disappeared {
  opacity: 0;
  transition: opacity 0.5s linear;
}
</style>
