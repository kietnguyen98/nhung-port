<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
    sectionId: string;
}>();

onMounted(() => {
    setTimeout(() => {
        const introContentImagesElement = document.getElementById(
            'intro-content-images'
        ) as HTMLElement;
        introContentImagesElement.classList.remove(
            'intro-content-images--slide-ani'
        );
        introContentImagesElement.classList.add(
            'intro-content-images--fade-out-ani'
        );
    }, 750);
});
</script>

<style scoped>
.intro-section {
    position: relative;
    height: calc(100vh);
    background-color: var(--color-cream);
    /* animation */
    animation: trans-background-color 1s ease-in;
}
.intro-content-title {
    position: relative;
    background-color: var(--color-red);
    padding: 5rem 5rem 7.5rem 5rem;
    text-align: center;
    line-height: 1;
    margin-bottom: 4rem;
    color: white;
    animation: slide-down 0.75s ease-in;

    h4 {
        font-weight: 300;
        animation: fade-in-slow 1.5s ease-in;
    }

    h1 {
        font-size: 15rem;
        font-weight: 300;
        font-style: italic;
        animation: fade-in-slow 1.5s ease-in;
    }
}

.intro-content-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4rem;
    right: 0;
    background-repeat: repeat;
    height: 4rem;
    background-size: 8rem 8rem;
    background-image: radial-gradient(
        circle at 4rem 0rem,
        var(--color-red) 4rem,
        transparent 4rem
    );
}

.intro-content-images {
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-content-images--slide-ani {
    animation: slide-up 0.75s ease-in;
}

.intro-content-images--fade-out-ani {
    animation: fade-out linear;
    animation-timeline: view();
    animation-range: exit -20rem;
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
        <div class="intro-content-title">
            <h4>Welcome to</h4>
            <h1 class="font-dancing-script">Hồng Nhung's</h1>
            <h4>Portfolio</h4>
        </div>
        <div
            class="intro-content-images intro-content-images--slide-ani"
            id="intro-content-images"
        >
            <div class="images-group">
                <MaskedImage
                    class="images-group__image-main"
                    image-src="/assets/images/image-1.jpg"
                    alt="image-main"
                    :height-rem="40"
                    :mask-number="2"
                    :with-border="false"
                />
                <MaskedImage
                    class="images-group__image-sub-1"
                    image-src="/assets/images/image-4.jpg"
                    alt="image sub"
                    :height-rem="15"
                    :mask-number="4"
                    :with-border="false"
                />
                <MaskedImage
                    class="images-group__image-sub-2"
                    image-src="/assets/images/image-5.jpg"
                    alt="image sub"
                    :height-rem="15"
                    :mask-number="5"
                    :with-border="false"
                />
                <MaskedImage
                    class="images-group__image-sub-3"
                    image-src="/assets/images/image-2.jpg"
                    alt="image sub"
                    :height-rem="7.5"
                    :mask-number="3"
                    :with-border="false"
                />
            </div>
        </div>
    </div>
</template>
