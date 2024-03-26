<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';

import { CardImage } from '..';

const favoriteProjectImageUrl =
    projectMockData.graphicDesign?.demoImages.mainImageUrl ?? '';

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);

const FILM_STRIP_IMAGE_HEIGHT_WIDTH_RATIO = 450 / 1024;
const FILM_STRIP_BACKGROUND_IMAGE_SIZE = 108;
</script>

<template>
    <div
        class="project-favorite-container"
        :style="{
            marginTop: `${25 * currentScaleRatio}rem`,
            height: `calc(100vw * ${FILM_STRIP_IMAGE_HEIGHT_WIDTH_RATIO} * ${FILM_STRIP_BACKGROUND_IMAGE_SIZE / 100})`,
            backgroundSize: `${FILM_STRIP_BACKGROUND_IMAGE_SIZE}vw`,
            backgroundPosition: `${-8.5 * currentScaleRatio}rem ${4 * currentScaleRatio}rem`,
            paddingBottom: `${4 * currentScaleRatio}rem`,
        }"
    >
        <div class="favorite-project">
            <div
                class="favorite-project__title"
                :style="{
                    height: `${42.5 * currentScaleRatio}rem`,
                    top: `${-22.5 * currentScaleRatio}rem`,
                    left: `${15 * currentScaleRatio}rem`,
                }"
            >
                <img
                    class="favorite-project-title__background-image"
                    src="/assets/images/paper-heart.png"
                />
                <h4
                    class="favorite-project-title__text font-dancing-script"
                    :style="{
                        top: `${11.5 * currentScaleRatio}rem`,
                        padding: `0rem ${6 * currentScaleRatio}rem 0rem ${6 * currentScaleRatio}rem `,
                    }"
                >
                    Some of my favorite Works
                </h4>
            </div>
            <div class="favorite-project__project-cards">
                <img
                    class="project-cards__background-image"
                    :style="{
                        width: `${225 * currentScaleRatio}rem`,
                        maxWidth: `${225 * currentScaleRatio}rem`,
                        left: `${-22.5 * currentScaleRatio}rem`,
                    }"
                    src="/assets/images/film-strip-2.png"
                />
                <div
                    class="project-cards__card-container"
                    :style="{
                        top: `${8.25 * currentScaleRatio}rem`,
                        right: `${12 * currentScaleRatio}rem`,
                    }"
                >
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                    <CardImage
                        alt="favorite project card"
                        :image-src="favoriteProjectImageUrl"
                        :height-rem="30"
                        :width-height-ratio="3 / 4"
                    />
                </div>
            </div>
            <img
                src="/assets/images/film-pin-2.png"
                alt="film pin 2"
                class="favorite-project__image-film-pin"
                :style="{
                    height: `${15 * currentScaleRatio}rem`,
                    top: `${-13 * currentScaleRatio}rem`,
                    right: `${14 * currentScaleRatio}rem`,
                }"
            />
            <img
                src="/assets/images/film-pin-1.png"
                alt="film pin 1"
                class="favorite-project__image-film-pin"
                :style="{
                    height: `${14 * currentScaleRatio}rem`,
                    bottom: `${-4.5 * currentScaleRatio}rem`,
                    right: `${47.5 * currentScaleRatio}rem`,
                }"
            />
        </div>
    </div>
</template>

<style scoped>
.project-favorite-container {
    width: 100vw;
    background-image: url(/assets/images/film-strip-1.png);
    background-repeat: no-repeat;
    display: flex;
}

.favorite-project {
    width: 100%;
    position: relative;
    align-self: flex-end;

    .favorite-project__title {
        position: absolute;
        z-index: 1;
    }

    .favorite-project__title > .favorite-project-title__text {
        transform: rotateZ(-12deg);
        text-align: center;
        position: absolute;
    }

    .favorite-project__project-cards {
        .project-cards__background-image {
            position: relative;
            z-index: 0;
            height: auto;
        }

        .project-cards__card-container {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            transform: rotateZ(-3deg);
            transform-origin: top right;
        }
    }

    .favorite-project__image-film-pin {
        position: absolute;
        z-index: 1;
    }
}
</style>
