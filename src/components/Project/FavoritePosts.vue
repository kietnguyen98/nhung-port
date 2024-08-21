<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

import { favoritePostsData } from '@/data';
import { useHover } from '@/hooks';
import {
  useControlPopupStore,
  useResponsiveStore,
} from '@/stores';

import { CardImage } from '..';

// responsive store
const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);

// control popup store
const controlPopupStore = useControlPopupStore();
const { isFavoritePostViewerOpened } = storeToRefs(
  controlPopupStore
);
const {
  setIsFavoritePostViewerOpened,
  setFavoritePostToView,
} = controlPopupStore;

const FILM_STRIP_IMAGE_HEIGHT_WIDTH_RATIO = 450 / 1024;
const FILM_STRIP_BACKGROUND_IMAGE_SIZE = 108;
const favoriteList = favoritePostsData;
const FAVORITE_LIST_SLIDE_VELOCITY = 1 / 180;
const projectSectionCardContainerRef = ref<HTMLElement>();
const listChildLeftPositions = ref<Array<number>>([]);
let animateProjectCardsInterval:
  | ReturnType<typeof setInterval>
  | undefined = undefined;
const FILM_STRIP_ROTATE_DEG = -3;

const { isHover: isUserHoverOnList, refElement } =
  useHover();

// watch for window resize, scale ratio change or project section card container update
// the should reset list child left position
watch(
  [currentScaleRatio, projectSectionCardContainerRef],
  ([newScaleRatio, newProjectSectionCardContainer]) => {
    if (newScaleRatio && newProjectSectionCardContainer) {
      listChildLeftPositions.value = [];
    }
  }
);

watch(
  [
    currentScaleRatio,
    isUserHoverOnList,
    isFavoritePostViewerOpened,
    projectSectionCardContainerRef,
  ],
  ([
    newScaleRatio,
    newIsUserHoverOnList,
    newIsFavoritePostViewerOpened,
    newProjectSectionCardContainer,
  ]) => {
    if (newScaleRatio && newProjectSectionCardContainer) {
      // clear prev interval value if exist
      if (animateProjectCardsInterval !== undefined) {
        clearInterval(animateProjectCardsInterval);
      }
      // calculate new interval's callback
      const projectCardList =
        newProjectSectionCardContainer.children;
      const animateProjectCards = () => {
        for (let i = 0; i < projectCardList.length; i++) {
          const slideVelocityDefaultInRem =
            FAVORITE_LIST_SLIDE_VELOCITY *
            newScaleRatio *
            16;
          const slideVelocityWhileHoverInRem =
            slideVelocityDefaultInRem / 3;
          const slideVelocityInRem =
            newIsFavoritePostViewerOpened
              ? 0
              : newIsUserHoverOnList
                ? slideVelocityWhileHoverInRem
                : slideVelocityDefaultInRem;
          const child = projectCardList[i] as HTMLElement;
          const childWidthInRem = child.clientWidth / 16;

          const maximumChildLeftPosition =
            // full view width in rem / cos(rotateDeg)
            -window.innerWidth /
              16 /
              Math.cos(
                (FILM_STRIP_ROTATE_DEG / 180) * Math.PI
              ) -
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
          let childLeftPosition = listChildLeftPositions
            .value[i]
            ? listChildLeftPositions.value[i] -
              slideVelocityInRem
            : i * (childWidthInRem + childGapInRem) -
              window.innerWidth /
                Math.cos(
                  (FILM_STRIP_ROTATE_DEG / 180) * Math.PI
                ) /
                16 -
              slideVelocityInRem;

          if (
            childLeftPosition < maximumChildLeftPosition
          ) {
            // set current element to the last position
            const resetPosition =
              Math.max(...listChildLeftPositions.value) +
              childGapInRem +
              childWidthInRem;
            childLeftPosition = resetPosition;
          }
          listChildLeftPositions.value[i] =
            childLeftPosition;
        }

        for (let i = 0; i < projectCardList.length; i++) {
          const child = projectCardList[i] as HTMLElement;
          child.style.transform = `translateX(${listChildLeftPositions.value[i]}rem)`;
        }
      };

      // set new interval value, 60 frames per second
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
    class="favorite-posts-container"
    :style="{
      marginTop: `${22.5 * currentScaleRatio}rem`,
      height: `calc(${(FILM_STRIP_BACKGROUND_IMAGE_SIZE / 100) * 160 * currentScaleRatio}rem * ${FILM_STRIP_IMAGE_HEIGHT_WIDTH_RATIO})`,
      backgroundSize: `${(FILM_STRIP_BACKGROUND_IMAGE_SIZE / 100) * 160 * currentScaleRatio}rem`,
      backgroundPosition: `${-8.5 * currentScaleRatio}rem ${4 * currentScaleRatio}rem`,
      paddingBottom: `${4 * currentScaleRatio}rem`,
    }"
  >
    <div class="favorite-posts">
      <div
        class="favorite-posts__title"
        :style="{
          height: `${43.5 * currentScaleRatio}rem`,
          top: `${-25.5 * currentScaleRatio}rem`,
          left: `${12.5 * currentScaleRatio}rem`,
        }"
      >
        <img
          class="favorite-posts-title__background-image"
          src="/assets/images/paper-heart.webp"
        />
        <h3
          class="favorite-posts-title__text font-arielScript"
          :style="{
            top: `${13.5 * currentScaleRatio}rem`,
            left: `${2.5 * currentScaleRatio}rem`,
            padding: `0rem ${6 * currentScaleRatio}rem 0rem ${6 * currentScaleRatio}rem `,
          }"
        >
          some of my favorite works
        </h3>
      </div>
      <div class="favorite-posts__project-cards">
        <img
          class="project-cards__background-image"
          :style="{
            width: `${225 * currentScaleRatio}rem`,
            maxWidth: `${225 * currentScaleRatio}rem`,
            left: `${-22.5 * currentScaleRatio}rem`,
          }"
          src="/assets/images/film-strip-2.webp"
        />
        <div
          ref="refElement"
          class="project-cards__cards-container"
          :style="{
            top: `${8 * currentScaleRatio}rem`,
            right: `${0 * currentScaleRatio}rem`,
          }"
        >
          <div
            ref="projectSectionCardContainerRef"
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
                :is-rounded="true"
                :with-overlay="true"
                :click-event-callback="
                  () => {
                    setIsFavoritePostViewerOpened(true);
                    setFavoritePostToView(post);
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/film-pin-2.webp"
        alt="film pin 2"
        class="favorite-posts__image-film-pin"
        :style="{
          height: `${15 * currentScaleRatio}rem`,
          top: `${-13 * currentScaleRatio}rem`,
          right: `${14 * currentScaleRatio}rem`,
        }"
      />
      <img
        src="/assets/images/film-pin-1.webp"
        alt="film pin 1"
        class="favorite-posts__image-film-pin"
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
.favorite-posts-container {
  width: 100vw;
  background-image: url(/assets/images/film-strip-1.webp);
  background-repeat: no-repeat;
  display: flex;
}

.favorite-posts {
  width: 100%;
  position: relative;
  align-self: flex-end;

  .favorite-posts__title {
    position: absolute;
    z-index: 1;
  }

  .favorite-posts__title > .favorite-posts-title__text {
    transform: rotateZ(-18deg);
    text-align: center;
    position: absolute;
    line-height: 0.8;
  }

  .favorite-posts__project-cards {
    position: relative;
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

  .favorite-posts__image-film-pin {
    position: absolute;
    z-index: 1;
  }
}
</style>
