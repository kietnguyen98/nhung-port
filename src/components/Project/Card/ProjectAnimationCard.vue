<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';

const outerImageUrl = projectMockData.animation?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        class="animation-card"
        :style="{
            height: `${87.5 * currentScaleRatio}rem`,
            maxHeight: `${87.5 * currentScaleRatio}rem`,
            transform: `translateY(${30 * currentScaleRatio}rem) translateX(${2 * currentScaleRatio}rem)`,
        }"
    >
        <img
            src="/assets/images/project-animation-frame.png"
            alt="project animation frame"
            class="animation__frame"
        />
        <div
            class="animation__outer-image"
            :style="{
                backgroundImage: `url(${outerImageUrl})`,
                height: `${45 * currentScaleRatio}rem`,
                width: `${43 * currentScaleRatio}rem`,
                top: `${9.25 * currentScaleRatio}rem`,
                left: `${11.5 * currentScaleRatio}rem`,
            }"
        ></div>
    </div>
</template>

<style scoped>
.animation-card {
    .animation__frame {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .animation__outer-image {
        position: absolute;
        transform: rotateZ(14.5deg);
        z-index: 0;

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
