<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { COMPONENT_SCALE_RATIO } from '@/constants';
import { useResponsiveStore } from '@/stores';
import { wordFlick } from '@/utilities';

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
    '.',
    '.',
    '.',
]);

onMounted(() => {
    wordFlick({
        paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ],
        printElement: document.getElementById(
            'about-me-content'
        ) as HTMLHeadingElement,
    });
});

const CONTENT_WRAPPER_BACKGROUND_IMAGE_HEIGHT_RATIO = 350 / 645;

const mediaQueriesStore = useResponsiveStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div :id="sectionId" class="about-section">
        <div class="about-content">
            <div
                id="about-content-wavy-title-container"
                class="wavy-title-container wavy-title-container--enter-leave-ani"
                :style="{
                    height: `${20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                }"
            >
                <h1
                    v-for="(letter, index) in title"
                    :key="letter"
                    :style="`--i:${index}`"
                    class="about-content__title font-dancing-script"
                >
                    {{ letter !== 'space' ? letter : '&nbsp;' }}
                </h1>
            </div>

            <div
                class="about-content__text-wrapper about-content__text-wrapper--enter-leave-ani"
                :style="{
                    width: `${100 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    height: `${100 * CONTENT_WRAPPER_BACKGROUND_IMAGE_HEIGHT_RATIO * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                }"
            >
                <h6>
                    <span
                        id="about-me-content"
                        class="about-content__text"
                    ></span>
                </h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-content {
    position: relative;
    height: calc(100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wavy-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;

    .about-content__title {
        text-align: center;
        animation: letter-wavy 1.5s infinite;
        animation-delay: calc(0.1s * var(--i));
    }
}

.wavy-title-container--enter-leave-ani {
    /* animation */
    opacity: 0;
    transform: translateY(-20rem);
    scale: 0.5;
    animation:
        fade-in-from-top linear forwards,
        fade-out-to-top-with-scale linear forwards;
    animation-timeline: view(), view();
    animation-range: entry, exit;
}

.about-content__text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/assets/clip-masks/mask-6.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h6 {
        text-align: center;
        width: 70%;
        font-style: italic;
    }

    .about-content__text::after {
        content: '';
        margin-left: 0.5rem;
        width: 0.5rem;
        height: 1.5rem;
        background: var(--color-black);
        display: inline-block;
        animation: cursor-blink 1s steps(2) infinite;
    }
}

.about-content__text-wrapper--enter-leave-ani {
    /* animation */
    opacity: 0;
    transform: translateY(-20rem);
    scale: 0.5;
    animation:
        fade-in-from-top linear forwards,
        fade-out-to-top-with-scale linear forwards;
    animation-timeline: view(), view();
    animation-range: entry, exit;
}
</style>
