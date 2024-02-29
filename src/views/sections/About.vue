<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { wordFlick } from '@/utils/wordFlickAnimation';
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

// animation on page scroll
</script>

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
    height: 20rem;
    gap: 0.1rem;

    .about-content__title {
        text-align: center;
        font-size: 12.5rem;
        font-weight: bolder;
        animation: letter-wavy 1.5s infinite;
        animation-delay: calc(0.1s * var(--i));
    }
}

.wavy-title-container--enter-leave-ani {
    /* animation */
    transform: translateX(-100rem) translateY(-50rem);
    opacity: 0;
    scale: 0;
    animation:
        fade-in-from-top-left linear forwards,
        fade-out-to-top-right linear forwards;
    animation-timeline: view(20rem), view(0rem);
    animation-range: entry, exit;
}

.about-content__text-wrapper {
    width: 80rem;
    height: calc(350 / 645 * 80rem);
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
    transform: translateY(50rem) translateX(100rem);
    opacity: 0;
    scale: 0;
    animation:
        fade-in-from-bottom-right linear forwards,
        fade-out-to-bottom-left linear forwards;
    animation-timeline: view(), view(20rem);
    animation-range: entry, exit;
}
</style>

<template>
    <div v-bind:id="sectionId" class="about-section">
        <div class="about-content">
            <div
                class="wavy-title-container wavy-title-container--enter-leave-ani"
                id="about-content-wavy-title-container"
            >
                <h1
                    v-for="(letter, index) in title"
                    :style="`--i:${index}`"
                    class="about-content__title font-dancing-script"
                >
                    {{ letter !== 'space' ? letter : '&nbsp;' }}
                </h1>
            </div>

            <div
                class="about-content__text-wrapper about-content__text-wrapper--enter-leave-ani"
            >
                <!-- <img src="/assets/clip-masks/mask-6.png" /> -->
                <h6>
                    <span
                        class="about-content__text"
                        id="about-me-content"
                    ></span>
                </h6>
            </div>
        </div>
    </div>
</template>
