<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { TPost } from '@/types';
import { useViewScrollingStore, useMediaQueriesStore } from '@/stores';
import { COMPONENT_SCALE_RATIO } from '@/constants';

defineProps<{ posts?: Array<TPost> }>();

const viewScrollingStore = useViewScrollingStore();
const { progress } = storeToRefs(viewScrollingStore);

const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<style scoped>
.indicator-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
}

.indicator {
    padding: 0.5rem 1rem;
    position: relative;
}

.view-section {
    position: absolute;
    top: calc(1rem / 2 - 0.125rem);
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    border: 0.125rem solid var(--color-white);
    border-radius: 0.25rem;
    transition: all 0.2s ease-out;
}

.section-popover {
    position: relative;
    width: 100%;
    height: 100%;

    .section-popover__title {
        position: absolute;
        z-index: 1;
        top: -4rem;
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
    }
}

.section-popover::after {
    content: '';
    position: absolute;
    top: calc(-4rem + 3rem + 0.5rem - 0.125rem);
    left: calc(50% - 0.5rem);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid var(--color-dark);
}

.posts-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
}

.post-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .post-wrapper__post-image {
        height: auto;
        width: auto;
    }
}
</style>

<template>
    <div class="indicator-container">
        <div class="indicator" v-if="posts && posts.length > 0">
            <div
                class="view-section"
                :style="{
                    height: `calc(${6 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                    width: `calc(${6 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,

                    left: `calc(1rem - 0.125rem + (100% - ${6 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem - 1rem * 2) * ${progress} / 100)`,
                }"
            >
                <div class="section-popover">
                    <div class="section-popover__title">
                        <span v-if="progress < 100">You are here !</span>
                        <span v-if="progress === 100"
                            >End of photos list !</span
                        >
                    </div>
                </div>
            </div>
            <div class="posts-container">
                <div
                    v-for="post in posts"
                    class="post-wrapper"
                    :style="{
                        height: `calc(${6 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                        width: `calc(${6 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                    }"
                >
                    <img
                        class="post-wrapper__post_image"
                        v-lazy="post.sourceUrl"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
