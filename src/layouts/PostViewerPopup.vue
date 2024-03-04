<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useControlPopupStore } from '@/stores/controlPopupStore';
import { storeToRefs } from 'pinia';
import { animateWheelEvent } from '@/utils/wheelEvent';

const store = useControlPopupStore();
const { isPostViewerOpened, brandToView } = storeToRefs(store);

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
                postViewerScrollWrapperElement.value.addEventListener(
                    'wheel',
                    handlePostViewerWheelEvent.value,
                    { passive: false }
                );
            } else {
                postViewerScrollWrapperElement.value.removeEventListener(
                    'wheel',
                    handlePostViewerWheelEvent.value
                );
            }
    }
);
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
    transition: backdrop-filter 0.75s ease;
    backdrop-filter: blur(0.5rem);
    visibility: visible;
}

.viewer-popup--closed {
    transition: visibility 0.75s linear;
    filter: none;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    img {
        height: auto;
    }
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
            <div class="content" v-if="brandToView">
                <img
                    v-for="imageUrl in brandToView.postImageUrls"
                    :src="imageUrl"
                />
            </div>
        </div>
    </div>
</template>
