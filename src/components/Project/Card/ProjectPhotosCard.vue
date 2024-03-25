<script setup lang="ts">
import { projectMockData } from '@/data';
const outerImageUrl = projectMockData.photo?.outerImageUrl;
</script>

<template>
    <div class="project-photo-card">
        <img
            src="/assets/images/project-photos-frame.png"
            alt="project photos frame"
            class="photos__frame"
        />
        <img
            src="/assets/images/butterfly-3.png"
            alt="butterfly 3"
            class="photos__sub-image-butterfly"
        />
        <div
            class="photos__outer-image"
            :style="{
                backgroundImage: `url(${outerImageUrl})`,
            }"
        ></div>
    </div>
</template>

<style scoped>
.project-photo-card {
    height: 55rem;
    position: relative;
    transform: translateY(-2.5rem) translateX(-2rem);

    .photos__frame {
        position: relative;
        z-index: 1;
    }

    .photos__sub-image-butterfly {
        position: absolute;
        height: 17.5rem;
        left: 5rem;
        top: -10rem;
    }

    .photos__outer-image {
        height: 30rem;
        width: 29rem;
        position: absolute;
        z-index: 0;
        left: 12.75rem;
        top: 8.5rem;
        transform: rotateZ(-21deg);

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
