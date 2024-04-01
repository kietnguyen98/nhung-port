<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

import { CircleProgressBar } from '@/components';
import {
  useControlPopupStore,
  useResponsiveStore,
  useScrollWrapperStore,
} from '@/stores';
import { TSections } from '@/types';
import {
  animateWheelEvent,
  blockWheelEvent,
} from '@/utilities';

import { NavigationBar } from '.';

// responsive store
const mediaQueriesStore = useResponsiveStore();
const { initEvent } = mediaQueriesStore;

// control popup store
const controlPopupStore = useControlPopupStore();
const { isProjectViewerOpened } = storeToRefs(
  controlPopupStore
);

// scroll wrapper store
const scrollWrapperStore = useScrollWrapperStore();
const { containerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);
const { setContainerScrollWrapper } = scrollWrapperStore;

const MAXIMUM_PAGE_LENGTH = 99999;

const containerScrollWrapperRef = ref<HTMLElement>();
const sections = ref<TSections>([
  { name: 'Intro', idName: 'intro', isActive: false },
  { name: 'About me', idName: 'about', isActive: false },
  { name: 'Work', idName: 'projects', isActive: false },
  { name: 'Contact', idName: 'contact', isActive: false },
]);
const handleContainerWheelEvent =
  ref<(e: WheelEvent) => void>();
const currentActive = ref<string>(sections.value[0].idName);
const isOnTop = ref<boolean>(true);
const progress = ref<number>(0);

onMounted(() => {
  // init media queries
  initEvent();
});

watch(
  containerScrollWrapperRef,
  (newContainerScrollWrapperRef) => {
    if (newContainerScrollWrapperRef) {
      setContainerScrollWrapper(
        newContainerScrollWrapperRef
      );
    }
  }
);

watch(
  containerScrollWrapper,
  (newContainerScrollWrapper) => {
    if (!newContainerScrollWrapper) return;
    // get sections List
    const sectionList: Array<{
      idName: string;
      element: HTMLElement;
    }> = sections.value.map((section) => {
      const element = document.getElementById(
        `${section.idName}-section`
      ) as HTMLElement;
      return {
        idName: section.idName,
        element: element,
      };
    });

    handleContainerWheelEvent.value = (e) =>
      animateWheelEvent({
        event: e,
        scrollWrapperElement:
          newContainerScrollWrapper as HTMLElement,
      });

    newContainerScrollWrapper.addEventListener(
      'wheel',
      blockWheelEvent,
      {
        passive: false,
      }
    );

    // block user scrolling for 1.5seconds, wait for all animations to be finished
    setTimeout(() => {
      if (
        newContainerScrollWrapper &&
        handleContainerWheelEvent.value
      ) {
        newContainerScrollWrapper.removeEventListener(
          'wheel',
          blockWheelEvent
        );
        newContainerScrollWrapper.addEventListener(
          'wheel',
          handleContainerWheelEvent.value,
          {
            passive: false,
          }
        );
      }
      // 1500ms = time for intro section enter animation to finish
    }, 1500);

    newContainerScrollWrapper.addEventListener(
      'scroll',
      () => {
        if (newContainerScrollWrapper) {
          for (
            let i = 0;
            i <= sectionList.length - 1;
            i++
          ) {
            const currentSectionOffsetTop =
              sectionList[i]?.element.offsetTop;
            const nextSectionOffsetTop =
              sectionList[i + 1]?.element.offsetTop ??
              MAXIMUM_PAGE_LENGTH;
            const wrapperScrollTop =
              newContainerScrollWrapper.scrollTop as number;

            if (
              wrapperScrollTop >= currentSectionOffsetTop &&
              wrapperScrollTop < nextSectionOffsetTop
            ) {
              currentActive.value = sectionList[i].idName;
            }
          }

          if (newContainerScrollWrapper.scrollTop === 0) {
            setTimeout(() => {
              isOnTop.value = true;
            }, 250);
          } else {
            isOnTop.value = false;
          }

          const fullPageHeight =
            newContainerScrollWrapper.scrollHeight;
          const scrollingProgress =
            (newContainerScrollWrapper.scrollTop /
              (fullPageHeight -
                newContainerScrollWrapper.clientHeight)) *
            100;

          // check progress on scrolling
          progress.value = Math.min(
            Math.ceil(scrollingProgress),
            100
          );
        }
      }
    );
  }
);

watch(
  [isProjectViewerOpened, containerScrollWrapper],
  ([
    newIsProjectViewerOpened,
    newContainerScrollWrapper,
  ]) => {
    if (
      newContainerScrollWrapper &&
      handleContainerWheelEvent.value
    ) {
      if (newIsProjectViewerOpened) {
        newContainerScrollWrapper.removeEventListener(
          'wheel',
          handleContainerWheelEvent.value
        );
      } else {
        newContainerScrollWrapper.addEventListener(
          'wheel',
          handleContainerWheelEvent.value,
          {
            passive: false,
          }
        );
      }
    }
  }
);
</script>

<template>
  <div class="container">
    <NavigationBar
      :is-on-top="isOnTop"
      :sections="sections"
      :current-active="currentActive"
    />
    <CircleProgressBar :progress-value="progress" />
    <div
      ref="containerScrollWrapperRef"
      class="container__scroll-wrapper"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  .container__scroll-wrapper {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;

    /* hiding scroll bar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .container__scroll-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}
</style>
