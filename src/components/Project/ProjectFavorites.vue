<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

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
const projectSectionCardContainer = ref<HTMLElement>();
let animateProjectCardsInterval: ReturnType<typeof setInterval> | undefined;
const FILM_STRIP_ROTATE_DEG = -3;

onMounted(() => {
    projectSectionCardContainer.value = document.getElementById(
        'project-section-cards-wrapper'
    ) as HTMLElement;
});

watch(
    [() => currentScaleRatio.value, () => projectSectionCardContainer.value],
    ([newScaleRatio, newProjectSectionCardContainer]) => {
        if (newScaleRatio && newProjectSectionCardContainer) {
            // clear prev interval value if exist
            if (typeof animateProjectCardsInterval !== 'undefined') {
                clearInterval(animateProjectCardsInterval);
            }

            // calculate new interval's callback
            const projectCardList = newProjectSectionCardContainer.children;
            let listChildRightPositions: Array<number> = [];

            const animateProjectCards = () => {
                for (let i = 0; i < projectCardList.length; i++) {
                    const slideVelocity = 1 / 180;
                    const slideVelocityInRem = slideVelocity * 16;
                    const child = projectCardList[i] as HTMLElement;
                    const childWidthInRem = child.clientWidth / 16;
                    const resetPosition = childWidthInRem;

                    const maximumChildRightPosition =
                        // full view width in rem / cos(rotateDeg)
                        -window.innerWidth /
                            16 /
                            Math.cos((FILM_STRIP_ROTATE_DEG / 180) * Math.PI) -
                        // card height in rem * sin(rotateDeg)
                        (child.clientHeight / 16) *
                            Math.sin(
                                Math.abs(
                                    (FILM_STRIP_ROTATE_DEG / 180) * Math.PI
                                )
                            ) -
                        // card width in rem
                        childWidthInRem;

                    const childGapInRem = 1.5 * newScaleRatio;
                    // must be in rem
                    let childRightPosition = listChildRightPositions[i]
                        ? listChildRightPositions[i] - slideVelocityInRem
                        : i * (childWidthInRem + childGapInRem) -
                          slideVelocityInRem;
                    if (childRightPosition < maximumChildRightPosition) {
                        childRightPosition = resetPosition;
                    }
                    listChildRightPositions[i] = childRightPosition;
                }

                for (let i = 0; i < projectCardList.length; i++) {
                    const child = projectCardList[i] as HTMLElement;
                    child.style.transform = `translateX(${listChildRightPositions[i]}rem)`;
                }
            };

            // set new interval value
            animateProjectCardsInterval = setInterval(
                animateProjectCards,
                1000 / 60
            );
        }
    }
);
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
                        left: `${2.5 * currentScaleRatio}rem`,
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
                        top: `${8 * currentScaleRatio}rem`,
                        right: `${0 * currentScaleRatio}rem`,
                    }"
                >
                    <div
                        id="project-section-cards-wrapper"
                        class="project-cards__cards-wrapper"
                        :style="{
                            transform: `rotateZ(${FILM_STRIP_ROTATE_DEG}deg)`,
                        }"
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
        transform: rotateZ(-18deg);
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
            position: absolute;
        }

        .project-cards__cards-wrapper {
            width: 100%;
            position: relative;
            transform-origin: top right;
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
