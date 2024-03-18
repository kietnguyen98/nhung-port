<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediaQueriesStore } from '@/stores';
import { COMPONENT_SCALE_RATIO } from '@/constants';
import { CardImage } from '@/components';
import { TDemoImages } from '@/types';

defineProps<{ demoImages: TDemoImages }>();

const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>
<style scoped>
.graphic-photos-container {
    width: 100%;
    background-image: url('/assets/images/textured-paper.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-photos {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-photos {
    flex: 1;
    color: var(--color-dark);
}

.view-more-button {
    outline: none;
    border: none;
    background-color: transparent;
    .view-more-button__text {
        transition: all 0.25s ease;
        line-height: 0.65;
    }
    .view-more-button__border {
        content: '';
        display: block;
        border-top: 0.25rem solid black;
        width: 0rem;
        transition: all 0.25s linear;
        transition-delay: 0.125s;
    }
    &:hover > .view-more-button__text {
        transform: translateY(-0.25rem);
    }

    &:hover > .view-more-button__border {
        width: 100%;
    }
}

.images-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .images-container__image-1 {
        transform: rotateZ(5deg);
    }

    .images-container__image-2 {
        transform: translateX(-2.5rem) translateY(-10rem) rotate(-15deg);
    }

    .images-container__image-3 {
        transform: translateX(1rem) translateY(-20rem) rotate(20deg);
    }
}
</style>

<template>
    <div class="graphic-photos-container">
        <div class="left-photos">
            <CardImage
                :height-rem="80"
                :image-src="demoImages.mainImageUrl"
                alt="masked-image-1"
            />
        </div>
        <div class="right-photos">
            <div
                :style="{
                    transform: `translateY(${20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                }"
            >
                <h5>
                    Click
                    <button class="view-more-button">
                        <h4 class="view-more-button__text">HERE</h4>
                        <span class="view-more-button__border"></span>
                    </button>
                </h5>
                <h5>to see more...</h5>
            </div>

            <div class="images-container">
                <div class="images-container__image-1">
                    <CardImage
                        :height-rem="40"
                        :image-src="demoImages.subImageUrls[0]"
                        alt="masked-image-2"
                    />
                </div>
            </div>
            <div class="images-container">
                <div
                    :style="{
                        transform: `translateX(${-2.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) translateY(${-10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) rotate(-15deg)`,
                    }"
                >
                    <CardImage
                        :height-rem="35"
                        :image-src="demoImages.subImageUrls[1]"
                        alt="masked-image-3"
                    />
                </div>

                <div
                    :style="{
                        transform: `translateX(${1 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) translateY(${-20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) rotate(20deg)`,
                    }"
                >
                    <CardImage
                        :height-rem="35"
                        :image-src="demoImages.subImageUrls[2]"
                        alt="masked-image-4"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
