<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';
import { TPost } from '@/types';

import { CardImage } from '..';

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);

const FILM_STRIP_IMAGE_HEIGHT_WIDTH_RATIO = 450 / 1024;
const FILM_STRIP_BACKGROUND_IMAGE_SIZE = 108;
const favoriteList = projectMockData.graphicDesign?.brands[1]?.posts.slice(
    0,
    5
) as Array<TPost>;

onMounted(() => {
    const projectSectionCardContainer = document.getElementById(
        'project-section-cards-wrapper'
    ) as HTMLElement;

    if (projectSectionCardContainer) {
        const projectCardList = projectSectionCardContainer.children;
        let listChildRightPositions: Array<number> = [];

        setInterval(() => {
            for (let i = 0; i < projectCardList.length; i++) {
                const slideSpeed = 1 / 240;
                const child = projectCardList[i] as HTMLElement;
                const childWidthInRem = child.clientWidth / 16;
                const resetPosition = -childWidthInRem;
                const gap = 1;
                // must be in rem
                let childRightPosition = listChildRightPositions[i]
                    ? listChildRightPositions[i] + slideSpeed * 16
                    : i * (child.clientWidth / 16 + gap) + slideSpeed * 16;
                if (
                    childRightPosition >
                    window.innerWidth / Math.cos((3 / 180) * Math.PI) / 16
                ) {
                    childRightPosition = resetPosition;
                }
                listChildRightPositions[i] = childRightPosition;
            }

            for (let i = 0; i < projectCardList.length; i++) {
                const child = projectCardList[i] as HTMLElement;
                child.style.right = `${listChildRightPositions[i]}rem`;
            }
        }, 1000 / 60);
    }
});
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
                <h3
                    class="favorite-project-title__text font-arielScript"
                    :style="{
                        top: `${12.5 * currentScaleRatio}rem`,
                        padding: `0rem ${6 * currentScaleRatio}rem 0rem ${6 * currentScaleRatio}rem `,
                    }"
                >
                    some of my favorite works
                </h3>
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
                    class="project-cards__cards-container"
                    :style="{
                        top: `${7.5 * currentScaleRatio}rem`,
                        right: `${0 * currentScaleRatio}rem`,
                    }"
                >
                    <div
                        id="project-section-cards-wrapper"
                        class="project-cards__cards-wrapper"
                    >
                        <div
                            v-for="post in favoriteList"
                            :key="post.sourceUrl"
                            class="project-card-wrapper"
                        >
                            <CardImage
                                alt="favorite project card"
                                :image-src="post.sourceUrl ?? ''"
                                :height-rem="29.5"
                                :width-height-ratio="3 / 4"
                            />
                        </div>
                    </div>
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
        line-height: 0.8;
    }

    .favorite-project__project-cards {
        .project-cards__background-image {
            position: relative;
            z-index: 0;
            height: auto;
        }

        .project-cards__cards-container {
            width: 105vw;
            position: absolute;
        }

        .project-cards__cards-wrapper {
            width: 100%;
            position: relative;
            transform-origin: top right;
            transform: rotateZ(-3deg);
        }

        .project-cards__cards-wrapper > .project-card-wrapper {
            position: absolute;
        }
    }

    .favorite-project__image-film-pin {
        position: absolute;
        z-index: 1;
    }
}
</style>
