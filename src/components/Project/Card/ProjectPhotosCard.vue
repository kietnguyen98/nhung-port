<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';
const outerImageUrl = projectMockData.photo?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        class="project-photo-card"
        :style="{
            height: `${80 * currentScaleRatio}rem`,
            maxHeight: `${80 * currentScaleRatio}rem`,
            transform: `translateY(${-3 * currentScaleRatio}rem) translateX(${-4 * currentScaleRatio}rem)`,
        }"
    >
        <img
            src="/assets/images/project-photos-frame.png"
            alt="project photos frame"
            class="photos__frame"
        />
        <img
            src="/assets/images/butterfly-3.png"
            alt="butterfly 3"
            class="photos__sub-image-butterfly"
            :style="{
                height: `${27.5 * currentScaleRatio}rem`,
                left: `${6.5 * currentScaleRatio}rem`,
                top: `${-18.5 * currentScaleRatio}rem`,
            }"
        />
        <div
            class="photos__outer-image"
            :style="{
                backgroundImage: `url(${outerImageUrl})`,
                height: `${43.75 * currentScaleRatio}rem`,
                width: `${42.25 * currentScaleRatio}rem`,
                top: `${12.5 * currentScaleRatio}rem`,
                left: `${18.75 * currentScaleRatio}rem`,
            }"
        ></div>
    </div>
</template>

<style scoped>
.project-photo-card {
    position: relative;

    .photos__frame {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .photos__sub-image-butterfly {
        position: absolute;
        height: 17.5rem;
        left: 5rem;
        top: -10rem;
    }

    .photos__outer-image {
        position: absolute;
        z-index: 0;
        transform: rotateZ(-21deg);

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
