<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import { POST_TYPE_VALUES } from '@/constants';
import { useScrollingDebounce } from '@/hooks';
import { useResponsiveStore, useViewScrollingStore } from '@/stores';
import { TPost } from '@/types';

const props = defineProps<{
    posts?: Array<TPost>;
    scrollWrapperElement: HTMLElement;
}>();

const viewScrollingStore = useViewScrollingStore();
const { progress } = storeToRefs(viewScrollingStore);

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio, currentViewWidth, currentViewHeight } =
    storeToRefs(mediaQueriesStore);

const { isScrolling } = useScrollingDebounce({
    scrollWrapperElement: props.scrollWrapperElement,
    debounceTime: 500,
});

const INDICATOR_POST_HEIGHT = 5;

const indicatorToViewSizeRatio = ref<number>(
    (INDICATOR_POST_HEIGHT * currentScaleRatio.value * 16) /
        currentViewHeight.value
);

watch(
    [() => currentScaleRatio.value, () => currentViewHeight.value],
    ([newCurrentScreen, newCurrentViewHeight]) => {
        indicatorToViewSizeRatio.value =
            (INDICATOR_POST_HEIGHT * newCurrentScreen * 16) /
            newCurrentViewHeight;
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
        <div v-if="posts && posts.length > 0" class="indicator">
            <div
                class="view-section"
                :style="{
                    height: `${INDICATOR_POST_HEIGHT * currentScaleRatio + 10 * indicatorToViewSizeRatio * 2}rem`,
                    top: `calc(1rem - ${10 * indicatorToViewSizeRatio}rem)`,
                    width: `${((INDICATOR_POST_HEIGHT * currentScaleRatio + 10 * indicatorToViewSizeRatio * 2) * currentViewWidth) / currentViewHeight}rem`,
                    // left = current padding left - view section border width + (full indicator posts width - view section width) * progress / 100
                    // + current padding left = current post padding left
                    left: `calc(
                        2rem 
                        - ${10 * indicatorToViewSizeRatio}rem 
                        + (100% - ${((INDICATOR_POST_HEIGHT * currentScaleRatio + 10 * indicatorToViewSizeRatio * 2) * currentViewWidth) / currentViewHeight}rem + ${10 * indicatorToViewSizeRatio}rem * 2 - 2rem * 2) * ${progress} / 100
                        )`,
                }"
            >
                <div class="section-popover">
                    <div class="section-popover__title">
                        <span v-if="progress < 100">You are here!</span>
                        <span v-if="progress === 100">End of list!</span>
                    </div>
                </div>
            </div>
            <div
                class="post-wrapper"
                :style="{
                    height: `${INDICATOR_POST_HEIGHT * currentScaleRatio}rem`,
                    // indicator post image gap = current post image gap * current indicator height (in pixel) / view height (in pixel)
                    gap: `${INDICATOR_POST_HEIGHT * currentScaleRatio * indicatorToViewSizeRatio}rem`,
                }"
            >
                <img
                    v-for="post in posts"
                    :key="post.sourceUrl"
                    v-lazy="
                        post.type === POST_TYPE_VALUES.PHOTO
                            ? post.sourceUrl
                            : post.thumbnailUrl
                    "
                    :alt="'post image ' + post.sourceUrl"
                    class="post-wrapper__post_image"
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
    padding: 1rem 2rem;
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
        top: -4.25rem;
        left: -0.5rem;
        height: 3rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.5rem;
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
        width: fit-content;
    }
}
</style>
