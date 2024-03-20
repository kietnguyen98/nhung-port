<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import {
    useControlPopupStore,
    useMediaQueriesStore,
    useViewScrollingStore,
} from '@/stores';
import { animateWheelEvent } from '@/utilities';
import { PostViewer, PostViewerIndicator } from '@/components';
import { COMPONENT_SCALE_RATIO } from '@/constants';

// control popup
const popupStore = useControlPopupStore();
const { isPostViewerOpened, brandToView } = storeToRefs(popupStore);
const { setIsPostViewerOpened, setBrandToView } = popupStore;

// view scrolling progress
const viewScrollingStore = useViewScrollingStore();
const { setViewProgress } = viewScrollingStore;

// media query for responsive
const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);

const postViewerScrollWrapperElement = ref<HTMLElement>();
const handlePostViewerWheelEvent = ref<(e: WheelEvent) => void>();
const handlePostViewerScrollEvent = ref<(e?: Event) => void>();

onMounted(() => {
    postViewerScrollWrapperElement.value = document.getElementById(
        'post-viewer-scroll-wrapper'
    ) as HTMLElement;

    handlePostViewerWheelEvent.value = (e: WheelEvent) =>
        animateWheelEvent({
            event: e,
            scrollWrapperElement:
                postViewerScrollWrapperElement.value as HTMLElement,
        });

    handlePostViewerScrollEvent.value = () => {
        if (postViewerScrollWrapperElement.value) {
            const fullScrollWrapperHeight =
                postViewerScrollWrapperElement.value.scrollHeight;
            const currentScrollOffsetTop =
                postViewerScrollWrapperElement.value.scrollTop;
            const currentScreenViewHeight =
                postViewerScrollWrapperElement.value.clientHeight;

            setViewProgress(
                Math.ceil(
                    (currentScrollOffsetTop /
                        (fullScrollWrapperHeight - currentScreenViewHeight)) *
                        100
                )
            );
        }
    };
});

watch(
    () => isPostViewerOpened.value,
    (curValue) => {
        if (
            handlePostViewerWheelEvent.value &&
            postViewerScrollWrapperElement.value &&
            handlePostViewerScrollEvent.value
        )
            if (curValue) {
                // popup opened
                postViewerScrollWrapperElement.value.addEventListener(
                    'wheel',
                    handlePostViewerWheelEvent.value,
                    { passive: false }
                );

                postViewerScrollWrapperElement.value.addEventListener(
                    'scroll',
                    handlePostViewerScrollEvent.value,
                    {
                        passive: false,
                    }
                );
            } else {
                // popup closed
                postViewerScrollWrapperElement.value.removeEventListener(
                    'wheel',
                    handlePostViewerWheelEvent.value
                );

                postViewerScrollWrapperElement.value.removeEventListener(
                    'scroll',
                    handlePostViewerScrollEvent.value
                );

                // reset viewer progress to 0
                setTimeout(() => {
                    // wait for popup totally closed
                    setViewProgress(0);
                }, 1000);
            }
    }
);

// reset scroll position when close popup
const handleClosePostViewer = () => {
    setIsPostViewerOpened(false);
    setTimeout(() => {
        setBrandToView(undefined);
        postViewerScrollWrapperElement.value?.scrollTo({ top: 0 });
    }, 1000);
};
</script>

<style scope>
.viewer-popup {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
}

.viewer-popup--opened {
    transition: backdrop-filter 0.5s ease;
    backdrop-filter: blur(1rem);
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
    align-items: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    /* hiding scroll bar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    .viewer-content__close-button {
        position: fixed;
        top: 2rem;
        right: 3rem;
        z-index: 1;
        outline: none;
        border: none;
        font-size: 2rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--color-dark);
        color: var(--color-cream);
        box-shadow:
            rgba(0, 0, 0, 0.07) 0px 1px 2px,
            rgba(0, 0, 0, 0.07) 0px 2px 4px,
            rgba(0, 0, 0, 0.07) 0px 4px 8px,
            rgba(0, 0, 0, 0.07) 0px 8px 16px,
            rgba(0, 0, 0, 0.07) 0px 16px 32px,
            rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }

    .viewer-content__close__close-button--appeared {
        transform: rotateZ(0deg) scale(1);
        transition: transform 0.5s 0.5s linear;
    }

    .viewer-content__close-button--disappeared {
        transform: rotateZ(-360deg) scale(0);
        transition: transform 0.5s linear;
    }

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

.viewer-content::-webkit-scrollbar {
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

.empty-post {
    height: 100%;
    width: 100%;
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

<template>
    <div
        :class="[
            'viewer-popup',
            isPostViewerOpened
                ? 'viewer-popup--opened'
                : 'viewer-popup--closed',
        ]"
    >
        <div
            class="viewer-content"
            :style="{
                padding: `${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                height: `calc(100vh - ${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem * 2)`,
                width: `calc(100vw - ${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem * 2)`,
            }"
            id="post-viewer-scroll-wrapper"
        >
            <button
                :class="[
                    'viewer-content__close-button',
                    isPostViewerOpened
                        ? 'viewer-content__close-button--appeared'
                        : 'viewer-content__close-button--disappeared',
                ]"
                @click="handleClosePostViewer"
            >
                X
            </button>
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
                :class="[
                    'posts-wrapper',
                    isPostViewerOpened
                        ? 'posts-wrapper--appeared'
                        : 'posts-wrapper--disappeared',
                ]"
            >
                <PostViewer
                    v-if="brandToView?.posts.length"
                    v-for="post in brandToView.posts"
                    :post="post"
                />
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
                    :scroll-wrapper-element="postViewerScrollWrapperElement"
                />
            </div>
        </div>
    </div>
</template>
