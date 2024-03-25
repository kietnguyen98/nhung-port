<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';

const outerImageUrl = projectMockData.graphicDesign?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        class="graphic-design-card"
        :style="{
            height: `${80 * currentScaleRatio}rem`,
            maxHeight: `${80 * currentScaleRatio}rem`,
            transform: `translateY(${-16.5 * currentScaleRatio}rem) translateX(${-2 * currentScaleRatio}rem)`,
        }"
    >
        <img
            src="/assets/images/project-graphic-design-frame.png"
            alt="project graphic design frame"
            class="graphic-design__frame"
        />
        <div
            class="graphic-design__outer-image"
            :style="{
                backgroundImage: `url(${outerImageUrl})`,
                height: `${39.5 * currentScaleRatio}rem`,
                width: `${38 * currentScaleRatio}rem`,
                top: `${25.75 * currentScaleRatio}rem`,
                left: `${15 * currentScaleRatio}rem`,
            }"
        ></div>
    </div>
</template>

<style scoped>
.graphic-design-card {
    .graphic-design__frame {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .graphic-design__outer-image {
        position: absolute;
        transform: rotateZ(-8.5deg);
        z-index: 0;

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
