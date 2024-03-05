<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useControlPopupStore } from '@/stores/controlPopupStore';
import { storeToRefs } from 'pinia';
import { animateWheelEvent } from '@/utils/wheelEvent';

const store = useControlPopupStore();
const { isPostViewerOpened, brandToView } = storeToRefs(store);
const { setIsPostViewerOpened, setBrandToView } = store;

const postViewerScrollWrapperElement = ref<HTMLElement>();
const handlePostViewerWheelEvent = ref<(e: WheelEvent) => void>();

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
});

watch(
    () => isPostViewerOpened.value,
    (curValue) => {
        if (
            handlePostViewerWheelEvent.value &&
            postViewerScrollWrapperElement.value
        )
            if (curValue) {
                // wait for animation finished then add scroll listener
                if (
                    handlePostViewerWheelEvent.value &&
                    postViewerScrollWrapperElement.value
                ) {
                    postViewerScrollWrapperElement.value.addEventListener(
                        'wheel',
                        handlePostViewerWheelEvent.value,
                        { passive: false }
                    );
                }
            } else {
                if (
                    handlePostViewerWheelEvent.value &&
                    postViewerScrollWrapperElement.value
                ) {
                    postViewerScrollWrapperElement.value.removeEventListener(
                        'wheel',
                        handlePostViewerWheelEvent.value
                    );
                }
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
    width: 100vw;
    height: 100vh;
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

.content-wrapper {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    /* hiding scroll bar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}

.content-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}

.content {
    padding: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    .content__close-button {
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 9999;
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

    .content__close-button--appeared {
        transform: rotateZ(0deg) scale(1);
        transition: transform 0.5s 0.5s linear;
    }

    .content__close-button--disappeared {
        transform: rotateZ(-360deg) scale(0);
        transition: transform 0.5s linear;
    }
}

.posts-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    .post-image {
        height: auto;
        width: auto;
    }
}

.posts-wrapper--appeared {
    opacity: 1;
    transition: opacity 0.5s 0.5s linear;
}

.posts-wrapper--disappeared {
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
        <div class="content-wrapper" id="post-viewer-scroll-wrapper">
            <div class="content">
                <button
                    :class="[
                        'content__close-button',
                        isPostViewerOpened
                            ? 'content__close-button--appeared'
                            : 'content__close-button--disappeared',
                    ]"
                    @click="handleClosePostViewer"
                >
                    X
                </button>
                <div
                    :class="[
                        'posts-wrapper',
                        isPostViewerOpened
                            ? 'posts-wrapper--appeared'
                            : 'posts-wrapper--disappeared',
                    ]"
                >
                    <img
                        class="post-image"
                        v-for="imageUrl in brandToView?.postImageUrls"
                        :src="imageUrl"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
