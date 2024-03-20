<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediaQueriesStore } from '@/stores';
import { COMPONENT_SCALE_RATIO } from '@/constants';

defineProps<{
    imageSrc: string;
    alt: string;
    heightRem?: number;
}>();

const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
const IMAGE_CARD_WIDTH_HEIGHT_RATIO = 9 / 16;
</script>

<template>
    <div
        class="image-wrapper"
        :style="{
            backgroundImage: `url(${imageSrc})`,
            height: heightRem
                ? `${heightRem * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`
                : '100%',
            width: heightRem
                ? `${heightRem * COMPONENT_SCALE_RATIO[currentScreen.label] * IMAGE_CARD_WIDTH_HEIGHT_RATIO}rem`
                : 'auto',
        }"
    ></div>
</template>

<style scoped>
.image-wrapper {
    border: 1rem solid var(--color-white);
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
