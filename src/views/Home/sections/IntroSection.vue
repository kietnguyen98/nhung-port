<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

defineProps<{
    sectionId: string;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        :id="sectionId"
        class="intro-section"
        :style="{
            paddingTop: `${20 * currentScaleRatio}rem`,
            paddingBottom: `${15 * currentScaleRatio}rem`,
        }"
    >
        <div
            id="intro-content-images"
            class="intro-content-images intro-content-images--enter-ani"
        >
            <div class="images-group">
                <div
                    class="images-group__sub images-group__intro-title"
                    :style="{
                        top: `${-11 * currentScaleRatio}rem`,
                        left: `${16.5 * currentScaleRatio}rem`,
                    }"
                >
                    <h1 class="font-arielScript">Welcome to</h1>
                </div>
                <img
                    class="images-group__main"
                    src="/assets/images/profile-photo.png"
                    :style="{
                        height: `${85 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/butterfly-2.png"
                    class="images-group__sub images-group__butterfly"
                    :style="{
                        height: `${17 * currentScaleRatio}rem`,
                        top: `${-10 * currentScaleRatio}rem`,
                        left: `${-20.5 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/rose-2.png"
                    class="images-group__sub images-group__rose"
                    :style="{
                        height: `${95 * currentScaleRatio}rem`,
                        maxHeight: `${95 * currentScaleRatio}rem`,
                        top: `${-7.5 * currentScaleRatio}rem`,
                        right: `${-57.5 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/stamp-graphic-designer.png"
                    class="images-group__sub images-group__stamp-1"
                    :style="{
                        height: `${32.5 * currentScaleRatio}rem`,
                        top: `${-3.5 * currentScaleRatio}rem`,
                        left: `${-9.5 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/stamp-illustrator.png"
                    class="images-group__sub images-group__stamp-2"
                    :style="{
                        height: `${27 * currentScaleRatio}rem`,
                        top: `${13.5 * currentScaleRatio}rem`,
                        right: `${-2 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/stamp-stylist.png"
                    class="images-group__sub images-group__stamp-3"
                    :style="{
                        height: `${21 * currentScaleRatio}rem`,
                        bottom: `${14.5 * currentScaleRatio}rem`,
                        left: `${-7 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/stamp-wave.png"
                    class="images-group__sub images-group__stamp-4"
                    :style="{
                        height: `${15 * currentScaleRatio}rem`,
                        top: `${32.5 * currentScaleRatio}rem`,
                        left: `${-12.5 * currentScaleRatio}rem`,
                    }"
                />
                <img
                    src="/assets/images/stamp-flower.png"
                    class="images-group__sub images-group__stamp-5"
                    :style="{
                        height: `${21 * currentScaleRatio}rem`,
                        bottom: `${12.5 * currentScaleRatio}rem`,
                        right: `${-11 * currentScaleRatio}rem`,
                    }"
                />
                <div
                    class="images-group__sub images-group__port-title"
                    :style="{
                        height: `${6 * currentScaleRatio}rem`,
                        width: `${28 * currentScaleRatio}rem`,
                        bottom: `${1.5 * currentScaleRatio}rem`,
                        right: `${-7 * currentScaleRatio}rem`,
                    }"
                >
                    <h6 class="font-ibmPlexMono">portfolio.</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-section {
    position: relative;
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
        animation: bubble-bounce 2s infinite;
    }

    .images-group__stamp-1 {
        animation: bubble-bounce 3s infinite;
    }

    .images-group__stamp-2 {
        animation: bubble-bounce 4s infinite;
    }

    .images-group__stamp-3 {
        animation: bubble-bounce 5s infinite;
    }

    .images-group__port-title {
        /* attributes */
        background-image: url(/assets/images/portfolio-title-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        h4 {
            line-height: 100%;
        }
    }
}
</style>
