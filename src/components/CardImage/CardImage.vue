<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

defineProps<{
    imageSrc: string;
    alt: string;
    widthHeightRatio?: number;
    heightRem?: number;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
const IMAGE_CARD_WIDTH_HEIGHT_RATIO = 9 / 16;
</script>

<template>
    <div
        class="image-wrapper"
        :style="{
            backgroundImage: `url(${imageSrc})`,
            height: heightRem ? `${heightRem * currentScaleRatio}rem` : '100%',
            width: heightRem
                ? `${heightRem * currentScaleRatio * (widthHeightRatio ? widthHeightRatio : IMAGE_CARD_WIDTH_HEIGHT_RATIO)}rem`
                : 'auto',
        }"
    ></div>
</template>

<style scoped>
.image-wrapper {
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
