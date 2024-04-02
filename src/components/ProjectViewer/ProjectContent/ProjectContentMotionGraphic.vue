<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { usePlayVideo } from '@/hooks';
import {
  useResponsiveStore,
  useScrollWrapperStore,
} from '@/stores';
import { TPost } from '@/types';

import { VideoFrame, VideoThumbnailCard } from '.';

// responsive
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);

// scroll wrapper store
const scrollWrapperStore = useScrollWrapperStore();
const { projectViewerScrollWrapper } = storeToRefs(
  scrollWrapperStore
);

const FILM_STRIP_WIDTH_SCALE_RATIO = 1.075;

const motionGraphicPostList = projectMockData.motionGraphic
  ? projectMockData.motionGraphic.brands.reduce<
      Array<TPost>
    >(
      (accumulator, value) =>
        accumulator.concat(value.posts),
      []
    )
  : [];

const {
  currentVideoUrl,
  videoFrameElement,
  handlePlayNewVideo,
} = usePlayVideo({
  scrollWrapperElement:
    projectViewerScrollWrapper.value as HTMLElement,
});
</script>

<template>
  <div class="container">
    <div class="film-frame">
      <img
        ref="videoFrameElement"
        src="/assets/images/popup/motion-graphic/film-frame.png"
        alt="motion graphic content film frame"
        :style="{
          height: `${90 * currentScaleRatio}rem`,
          maxHeight: `${90 * currentScaleRatio}rem`,
          transform: `translateY(${5.5 * currentScaleRatio}rem)`,
        }"
      />
      <VideoFrame :source-url="currentVideoUrl" />
      <img
        src="/assets/images/popup/motion-graphic/film-pins.png"
        alt="film frame's film pin"
        class="film-frame__sub-images"
        :style="{
          height: `${29 * currentScaleRatio}rem`,
          bottom: `${-20.5 * currentScaleRatio}rem`,
          right: `${-9.25 * currentScaleRatio}rem`,
        }"
      />
    </div>
    <div
      class="film-strip"
      :style="{
        marginTop: `${6 * currentScaleRatio}rem`,
        paddingBottom: `${12 * currentScaleRatio}rem`,
      }"
    >
      <div
        class="video-thumbnails"
        :style="{
          top: `${13.75 * currentScaleRatio}rem`,
          gap: `${1 * currentScaleRatio}rem`,
        }"
      >
        <VideoThumbnailCard
          v-for="post in motionGraphicPostList"
          :key="post.sourceUrl"
          :thumbnail-image-url="post.thumbnailUrl ?? ''"
          :video-url="post.sourceUrl"
          :handle-play-video="handlePlayNewVideo"
        />
      </div>
      <img
        src="/assets/images/popup/motion-graphic/film-strip.png"
        alt="motion graphic content film strip"
        :style="{
          width: `${160 * FILM_STRIP_WIDTH_SCALE_RATIO * currentScaleRatio}rem`,
          maxWidth: `${160 * FILM_STRIP_WIDTH_SCALE_RATIO * currentScaleRatio}rem`,
        }"
      />
      <img
        class="film-strip__sub-images"
        src="/assets/images/popup/motion-graphic/camera.png"
        alt="film strip's camera"
        :style="{
          height: `${22.5 * currentScaleRatio}rem`,
          bottom: `${3.25 * currentScaleRatio}rem`,
          left: `${18 * currentScaleRatio}rem`,
        }"
      />
      <img
        class="film-strip__sub-images"
        src="/assets/images/popup/motion-graphic/note.png"
        alt="film strip's note"
        :style="{
          height: `${18 * FILM_STRIP_WIDTH_SCALE_RATIO * currentScaleRatio}rem`,
          bottom: `${-1.5 * currentScaleRatio}rem`,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  widows: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.film-frame {
  position: relative;

  .film-frame__sub-images {
    position: absolute;
    z-index: 1;
  }
}

.film-strip {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .film-strip__sub-images {
    position: absolute;
  }
}

.video-thumbnails {
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
