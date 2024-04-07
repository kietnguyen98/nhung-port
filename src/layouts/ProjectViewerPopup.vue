<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import {
  useControlPopupStore,
  useScrollWrapperStore,
} from '@/stores';
import {
  animateWheelEvent,
  blockWheelEvent,
} from '@/utilities';

// control popup store
const controlPopupStore = useControlPopupStore();
const { isProjectViewerOpened } = storeToRefs(
  controlPopupStore
);
const { setIsProjectViewerOpened, setProjectToView } =
  controlPopupStore;

// scroll wrapper store
const scrollWrapperStore = useScrollWrapperStore();
const { projectViewerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);
const { setProjectViewerScrollWrapper } =
  scrollWrapperStore;

const projectViewerScrollWrapperRef = ref<HTMLElement>();
const handlePopupWheelEvent =
  ref<(e: WheelEvent) => void>();

watch(
  projectViewerScrollWrapperRef,
  (newProjectViewerScrollWrapperRef) => {
    if (newProjectViewerScrollWrapperRef) {
      setProjectViewerScrollWrapper(
        newProjectViewerScrollWrapperRef
      );
    }
  }
);

watch(
  [isProjectViewerOpened, projectViewerScrollWrapper],
  ([newIsPopupOpened, newProjectViewerScrollWrapper]) => {
    handlePopupWheelEvent.value = (e: WheelEvent) =>
      animateWheelEvent({
        event: e,
        scrollWrapperElement:
          newProjectViewerScrollWrapper as HTMLElement,
      });

    if (newProjectViewerScrollWrapper)
      if (newIsPopupOpened) {
        // open popup
        // reset view position to the top
        newProjectViewerScrollWrapper.scrollTo({
          top: 0,
        });
        // block wheel event for 1.5s (0.75s for popup ani, 0.75s for title ani)
        // to wait for entry animation to be finished
        newProjectViewerScrollWrapper.addEventListener(
          'wheel',
          blockWheelEvent,
          { passive: false }
        );

        setTimeout(() => {
          // unblock wheel event
          newProjectViewerScrollWrapper.removeEventListener(
            'wheel',
            blockWheelEvent
          );

          // add animate wheel event
          if (handlePopupWheelEvent.value) {
            newProjectViewerScrollWrapper.addEventListener(
              'wheel',
              handlePopupWheelEvent.value,
              { passive: false }
            );
          }
        }, 1500);
      } else {
        // close popup
        // block wheel event and remove animate wheel event
        newProjectViewerScrollWrapper.addEventListener(
          'wheel',
          blockWheelEvent,
          { passive: false }
        );

        newProjectViewerScrollWrapper.removeEventListener(
          'wheel',
          handlePopupWheelEvent.value
        );
      }
  }
);

// reset scroll position when close popup
const handleCloseProjectViewer = () => {
  setIsProjectViewerOpened(false);
  setTimeout(() => {
    setProjectToView(undefined);
  }, 750);
};
</script>

<template>
  <div
    :class="[
      'popup-wrapper',
      isProjectViewerOpened
        ? 'popup-wrapper--opened'
        : 'popup-wrapper--closed',
    ]"
  >
    <div
      ref="projectViewerScrollWrapperRef"
      :class="{
        'popup-container': true,
      }"
    >
      <div
        :class="{
          'popup-content': true,
          'popup-content--enter-ani': isProjectViewerOpened,
          'popup-content--leave-ani':
            !isProjectViewerOpened,
        }"
      >
        <button
          class="popup-content__close-button"
          @click="handleCloseProjectViewer"
        >
          X
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-wrapper {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.popup-wrapper--opened {
  animation: trans-background-color-to-dark 0.75s ease-in
    forwards;
  visibility: visible;
}

.popup-wrapper--closed {
  animation: trans-background-color-to-clear 0.75s ease-in
    forwards;
  transition: visibility 0.75s linear;
  visibility: hidden;
}

.popup-container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  /* hiding scroll bar */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.popup-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.popup-content {
  position: relative;

  .popup-content__close-button {
    position: absolute;
    top: 2rem;
    right: 3rem;
    z-index: 999;
    outline: none;
    border: none;
    font-size: 2rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background-color: var(--color-red);
    color: var(--color-cream);
    box-shadow:
      rgba(0, 0, 0, 0.07) 0px 1px 2px,
      rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px,
      rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px,
      rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}
.popup-content--enter-ani {
  transform: translateX(100%);
  animation: slide-in-from-bottom 0.75s
    cubic-bezier(1, 0, 0.25, 0.9) forwards;
}

.popup-content--leave-ani {
  transform: translateX(0);
  animation: slide-out-to-bottom 0.75s
    cubic-bezier(1, 0, 0.25, 0.9) forwards;
}
</style>
