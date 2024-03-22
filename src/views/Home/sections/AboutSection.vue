<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { COMPONENT_SCALE_RATIO } from '@/constants';
import { useResponsiveStore } from '@/stores';

defineProps<{
    sectionId: string;
}>();

const title = ref<Array<string>>([
    'A',
    'b',
    'o',
    'u',
    't',
    'space',
    'm ',
    'e',
    'space',
]);

const mediaQueriesStore = useResponsiveStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div :id="sectionId" class="about-section">
        <!-- background -->
        <img
            class="about-section__bg-image"
            src="/assets/images/about-me-bg.png"
        />
        <!-- sub image -->
        <img
            src="/assets/images/rose-1.png"
            class="about-section__sub-image about-section__flower"
        />
        <!-- content -->
        <div class="content-container">
            <div
                id="about-content-wavy-title-container"
                class="wavy-title-container"
                :style="{
                    height: `${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                }"
            >
                <h4
                    v-for="(letter, index) in title"
                    :key="letter"
                    :style="`--i:${index}`"
                    class="about-content__title font-lora"
                >
                    {{ letter !== 'space' ? letter : '&nbsp;' }}
                </h4>
            </div>

            <div class="about-content__text-wrapper">
                <h6 class="font-lora">
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. ', 'Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. ', 'Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    ', 'Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.',
                </h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -8rem;

    .about-section__bg-image {
        width: 100%;
    }

    .about-section__sub-image {
        position: absolute;
    }

    .about-section__flower {
        z-index: 1;
        bottom: 13.5rem;
        left: -5rem;
    }
}

.content-container {
    position: absolute;
    padding: 0rem 10rem;
}

.wavy-title-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .about-content__title {
        text-align: center;
        font-weight: bolder;
        animation: letter-wavy 1.5s infinite;
        animation-delay: calc(0.1s * var(--i));
    }
}

.about-content__text-wrapper {
    text-align: center;
}
</style>
