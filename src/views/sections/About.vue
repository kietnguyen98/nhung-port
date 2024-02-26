<script setup lang="ts">
import { ref, onMounted } from 'vue';
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

var paragraphs: Array<string> = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    part: string,
    i = 0,
    offset = 0,
    forwards = true,
    skipCount = 0,
    skipDelay = 35,
    speed = 70;

const wordFlick = function () {
    setInterval(function () {
        // check if we should go forward and print current paragraph
        if (forwards) {
            // check if we have print all the text in the paragraph and should go backward
            if (offset >= paragraphs[i].length) {
                ++skipCount;
                if (skipCount === skipDelay) {
                    forwards = false;
                    skipCount = 0;
                }
            }
        } else {
            // check if we have finished go back and jump to the next paragraph
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                // check if we have reach the last paragraph and should be reset to the first paragraph
                if (i >= paragraphs.length) {
                    i = 0;
                }
            }
        }

        // get content base on current offset and calculate new offset
        part = paragraphs[i].substring(0, offset);
        if (skipCount === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        (
            document.getElementById('about-me-content') as HTMLHeadingElement
        ).innerHTML = part;
    }, speed);
};

onMounted(() => {
    wordFlick();
});

// animation on page scroll
</script>

<style scoped>
.about-section {
    background-color: var(--color-cream);
    height: calc(100vh);
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
    /* animation */
    opacity: 0;
    transform: translateY(-20rem);
    scale: 0.5;
    animation: fade-in-from-top linear forwards;
    animation-timeline: view();
    animation-range: entry;

    .about-content__title {
        text-align: center;
        font-size: 10rem;
        font-weight: bolder;
        animation: letter-wavy 1.5s infinite;
        animation-delay: calc(0.1s * var(--i));
    }
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
    /* animation */
    transform: translateY(50rem);
    opacity: 0;
    animation: fade-in-from-bottom linear forwards;
    animation-timeline: view();
    animation-range: entry;

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
</style>

<template>
    <div v-bind:id="sectionId" class="about-section">
        <div class="about-content">
            <div class="wavy-title-container">
                <h1
                    v-for="(letter, index) in title"
                    :style="`--i:${index}`"
                    class="about-content__title font-dancing-script"
                >
                    {{ letter !== 'space' ? letter : '&nbsp;' }}
                </h1>
            </div>

            <div class="about-content__text-wrapper">
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
