<script setup lang="ts">
import { onMounted } from 'vue';

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
</script>

<template>
    <div :id="sectionId" class="intro-section">
        <div
            id="intro-content-images"
            class="intro-content-images intro-content-images--enter-ani"
        >
            <div class="images-group">
                <div class="images-group__sub images-group__intro-title">
                    <h2 class="font-dancing-script">WelcomeTo</h2>
                </div>
                <img
                    class="images-group__main"
                    src="/assets/images/porifile-photo.png"
                />
                <img
                    class="images-group__sub images-group__butterfly"
                    src="/assets/images/butterfly-2.png"
                />
                <img
                    class="images-group__sub images-group__rose"
                    src="/assets/images/rose-2.png"
                />
                <img
                    class="images-group__sub images-group__stamp-1"
                    src="/assets/images/stamp-graphic-designer.png"
                />
                <img
                    class="images-group__sub images-group__stamp-2"
                    src="/assets/images/stamp-illustrator.png"
                />
                <img
                    class="images-group__sub images-group__stamp-3"
                    src="/assets/images/stamp-stylist.png"
                />
                <img
                    class="images-group__sub images-group__stamp-4"
                    src="/assets/images/stamp-wave.png"
                />
                <img
                    class="images-group__sub images-group__stamp-5"
                    src="/assets/images/stamp-flower.png"
                />
                <div class="images-group__sub images-group__port-title">
                    <h5>portfolio.</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-section {
    position: relative;
    padding-top: 15rem;
    padding-bottom: 10rem;
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

    .images-group__main {
        height: auto;
        width: auto;
    }

    .images-group__sub {
        position: absolute;
    }

    .images-group__intro-title {
        top: -5rem;
        left: 12.5rem;
    }

    .images-group__butterfly {
        height: 12.5rem;
        top: -6.5rem;
        left: -15.5rem;
        animation: bubble-bounce 2s infinite;
    }

    .images-group__rose {
        height: 45rem;
        top: -5rem;
        right: -25rem;
    }

    .images-group__stamp-1 {
        height: 26.5rem;
        top: -2.5rem;
        left: -7.5rem;
        animation: bubble-bounce 3s infinite;
    }

    .images-group__stamp-2 {
        height: 21rem;
        top: 10rem;
        right: -2rem;
        animation: bubble-bounce 4s infinite;
    }

    .images-group__stamp-3 {
        height: 16rem;
        bottom: 11.5rem;
        left: -5rem;
        animation: bubble-bounce 5s infinite;
    }

    .images-group__stamp-4 {
        height: 10rem;
        top: 25rem;
        left: -8rem;
    }

    .images-group__stamp-5 {
        height: 14rem;
        bottom: 11rem;
        right: -8rem;
    }

    .images-group__port-title {
        /* position */
        bottom: 1.5rem;
        right: -2.5rem;
        /* attributes */
        background-image: url(/assets/images/portfolio-title-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 4rem;
        width: 20rem;
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        letter-spacing: 0.125rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        h4 {
            line-height: 100%;
        }
    }
}
</style>
