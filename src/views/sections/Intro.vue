<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMediaQueriesStore } from '@/stores';
import { COMPONENT_SCALE_RATIO } from '@/constants';

defineProps<{
    sectionId: string;
}>();

onMounted(() => {
    setTimeout(() => {
        const introContentTitleElement = document.getElementById(
            'intro-content-title'
        ) as HTMLElement;
        const introContentImagesElement = document.getElementById(
            'intro-content-images'
        ) as HTMLElement;

        // update element's animation attribute
        introContentTitleElement.classList.remove(
            'intro-content-title--enter-ani'
        );
        introContentTitleElement.classList.add(
            'intro-content-title--leave-ani'
        );

        introContentImagesElement.classList.remove(
            'intro-content-images--enter-ani'
        );
        introContentImagesElement.classList.add(
            'intro-content-images--leave-ani'
        );
    }, 750);
});

const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<style scoped>
.intro-section {
    position: relative;
    min-height: 100vh;
    display: grid;
}
.intro-content-title {
    position: relative;
    background-color: var(--color-red);
    text-align: center;
    line-height: 1;
    margin-bottom: 4rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        animation: fade-in-slow 1.5s ease-in;
    }

    h1 {
        font-style: italic;
        animation: fade-in-slow 1.5s ease-in;
    }
}

.intro-content-title--enter-ani {
    animation: slide-down 0.75s ease-in;
}

.intro-content-title--leave-ani {
    animation: fade-out-to-top linear forwards;
    animation-timeline: view();
    animation-range: exit;
}

.intro-content-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(0px - var(--bubble-size) / 2);
    right: 0;
    background-repeat: repeat;
    height: calc(var(--bubble-size) / 2);
    background-size: var(--bubble-size) var(--bubble-size);
    background-image: radial-gradient(
        circle at calc(var(--bubble-size) / 2) 0rem,
        var(--color-red) calc(var(--bubble-size) / 2),
        transparent calc(var(--bubble-size) / 2)
    );
}

.intro-content-images {
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-content-images--enter-ani {
    animation: slide-up 0.75s ease-in;
}

.intro-content-images--leave-ani {
    animation: fade-out linear forwards;
    animation-timeline: view();
    animation-range: exit;
}

.images-group {
    position: relative;
    .images-group__image-sub-1 {
        position: absolute;
        top: 7.5rem;
        left: -10rem;
        animation: bubble-bounce 2s infinite ease-in-out;
    }

    .images-group__image-sub-2 {
        position: absolute;
        bottom: -2.5rem;
        right: -8rem;
        animation: bubble-bounce 1.5s infinite ease-in-out;
    }

    .images-group__image-sub-3 {
        position: absolute;
        top: 3rem;
        right: -7rem;
        animation: bubble-bounce 2.5s infinite ease-in-out;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="intro-section">
        <div
            class="intro-content-title intro-content-title--enter-ani"
            :style="{
                paddingTop: `${7.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                paddingBottom: `${2.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
            }"
            id="intro-content-title"
        >
            <h5>Welcome to</h5>
            <h1 class="font-dancing-script">Hồng Nhung's</h1>
            <h5>Portfolio</h5>
        </div>
        <div
            class="intro-content-images intro-content-images--enter-ani"
            id="intro-content-images"
        >
            <div class="images-group">
                <div class="images-group__image-main">
                    <MaskedImage
                        image-src="/assets/images/image-1.jpg"
                        alt="image-main"
                        :height-rem="40"
                        :mask-number="2"
                        :with-border="false"
                    />
                </div>
                <div
                    class="images-group__image-sub-1"
                    :style="{
                        top: `${7.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        left: `${-10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    }"
                >
                    <MaskedImage
                        image-src="/assets/images/image-4.jpg"
                        alt="image sub"
                        :height-rem="15"
                        :mask-number="4"
                        :with-border="false"
                    />
                </div>
                <div
                    class="images-group__image-sub-2"
                    :style="{
                        bottom: `${-2.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        right: `${-8 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    }"
                >
                    <MaskedImage
                        image-src="/assets/images/image-5.jpg"
                        alt="image sub"
                        :height-rem="15"
                        :mask-number="5"
                        :with-border="false"
                    />
                </div>
                <div
                    class="images-group__image-sub-3"
                    :style="{
                        top: `${3 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        right: `${-7 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    }"
                >
                    <MaskedImage
                        image-src="/assets/images/image-2.jpg"
                        alt="image sub"
                        :height-rem="7.5"
                        :mask-number="3"
                        :with-border="false"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
