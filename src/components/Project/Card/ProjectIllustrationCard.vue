<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        class="project-illustration-card"
        :style="{
            height: `${82.5 * currentScaleRatio}rem`,
            maxHeight: `${82.5 * currentScaleRatio}rem`,
            transform: `translateY(${25 * currentScaleRatio}rem) translateX(${0.5 * currentScaleRatio}rem)`,
        }"
    >
        <img
            src="/assets/images/project-illustration frame.png"
            alt="project illustration frame"
            class="illustration__frame"
        />
        <img
            src="/assets/images/butterfly-1.png"
            alt="butterfly 1"
            class="illustration__sub-image-butterfly"
            :style="{
                height: `${22.5 * currentScaleRatio}rem`,
                left: `${-27.5 * currentScaleRatio}rem`,
                bottom: `${15 * currentScaleRatio}rem`,
            }"
        />
        <div
            class="illustration__outer-image"
            :style="{
                height: `${45 * currentScaleRatio}rem`,
                width: `${43.5 * currentScaleRatio}rem`,
                top: `${21.25 * currentScaleRatio}rem`,
                left: `${9 * currentScaleRatio}rem`,
            }"
        ></div>
    </div>
</template>

<style scoped>
.project-illustration-card {
    position: relative;

    .illustration__frame {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .illustration__sub-image-butterfly {
        position: absolute;
    }

    .illustration__outer-image {
        transform: rotateZ(9deg);
        position: absolute;
        z-index: 0;

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
