<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useControlPopupStore, useResponsiveStore } from '@/stores';

const outerImageUrl = projectMockData.graphicDesign?.outerImageUrl;

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);

const controlPopupStore = useControlPopupStore();
const { setIsPopupOpened, setProjectToView } = controlPopupStore;
</script>

<template>
    <div
        class="graphic-design-card"
        :style="{
            height: `${90 * currentScaleRatio}rem`,
            maxHeight: `${90 * currentScaleRatio}rem`,
            transform: `translateY(${-20 * currentScaleRatio}rem) translateX(${1.5 * currentScaleRatio}rem)`,
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
                height: `${44.5 * currentScaleRatio}rem`,
                width: `${42.5 * currentScaleRatio}rem`,
                top: `${28.75 * currentScaleRatio}rem`,
                left: `${17 * currentScaleRatio}rem`,
            }"
        ></div>
        <!-- adding an overlay to handle user event -->
        <div
            class="graphic-design__outer-image-overlay"
            :style="{
                height: `${44.5 * currentScaleRatio}rem`,
                width: `${42.5 * currentScaleRatio}rem`,
                top: `${28.75 * currentScaleRatio}rem`,
                left: `${17 * currentScaleRatio}rem`,
            }"
            @click="
                () => {
                    setIsPopupOpened(true);
                    setProjectToView(projectMockData.graphicDesign);
                }
            "
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

    .graphic-design__outer-image-overlay {
        position: absolute;
        transform: rotateZ(-8.5deg);
        z-index: 2;
    }
}
</style>
