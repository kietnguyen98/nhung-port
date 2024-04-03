<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { projectMockData } from '@/data';
import { useResponsiveStore } from '@/stores';
import { TProject } from '@/types';

const illustrationData =
  projectMockData.illustration as TProject;
const NOTE_IMAGE_URL_PREFIX =
  '/assets/images/popup/illustration/tags/';

const graduationData = illustrationData.brands[0];
const haulucidData = illustrationData.brands[1];
const highSchoolData = illustrationData.brands[2];
const insideTheTunnelData = illustrationData.brands[3];
const personalData = illustrationData.brands[4];
const rambutanData = illustrationData.brands[5];

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
</script>

<template>
  <div class="container">
    <div
      class="brands"
      :style="{
        marginTop: `${40 * currentScaleRatio}rem`,
      }"
    >
      <!-- graduation -->
      <div class="brand-image">
        <img
          v-lazy="graduationData.posts[0].sourceUrl"
          alt="graduation main"
          class="brand-image__main-image"
          :style="{
            height: `${52 * currentScaleRatio}rem`,
          }"
        />
        <img
          v-lazy="NOTE_IMAGE_URL_PREFIX + 'graduation.webp'"
          alt="graduation note"
          class="brand-image__note-image"
          :style="{
            height: `${29 * currentScaleRatio}rem`,
            top: `${9.75 * currentScaleRatio}rem`,
            left: `${-12.25 * currentScaleRatio}rem`,
          }"
        />
      </div>
      <!-- personal -->
      <!-- personal 1 -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          top: `${-30 * currentScaleRatio}rem`,
          left: `${35 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="personalData.posts[0].sourceUrl"
            alt="personal 1 main"
            class="brand-image__main-image"
            :style="{
              height: `${26 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="NOTE_IMAGE_URL_PREFIX + 'personal.webp'"
            alt="personal note"
            class="brand-image__note-image"
            :style="{
              height: `${6 * currentScaleRatio}rem`,
              right: `${-7 * currentScaleRatio}rem`,
              bottom: `${2 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- personal 2 -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          bottom: `${-27.5 * currentScaleRatio}rem`,
          right: `${-10 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="personalData.posts[1].sourceUrl"
            alt="personal 1 main"
            class="brand-image__main-image"
            :style="{
              height: `${34 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="NOTE_IMAGE_URL_PREFIX + 'personal.webp'"
            alt="personal note"
            class="brand-image__note-image"
            :style="{
              height: `${5 * currentScaleRatio}rem`,
              top: `${1 * currentScaleRatio}rem`,
              right: `${4 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- high school anniversary -->
      <!-- high school anniversary 1 -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          top: `${-24.5 * currentScaleRatio}rem`,
          left: `${-14 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="highSchoolData.posts[0].sourceUrl"
            alt="high school anniversary 1 main"
            class="brand-image__main-image"
            :style="{
              height: `${30 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="
              NOTE_IMAGE_URL_PREFIX +
              'highschool-anniversary.webp'
            "
            alt="high school anniversary note"
            class="brand-image__note-image"
            :style="{
              height: `${7 * currentScaleRatio}rem`,
              top: `${-2.5 * currentScaleRatio}rem`,
              right: `${-6 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- high school anniversary 2 -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          bottom: `${-35.5 * currentScaleRatio}rem`,
          left: `${-15 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="highSchoolData.posts[1].sourceUrl"
            alt="high school anniversary 1 main"
            class="brand-image__main-image"
            :style="{
              height: `${45 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="
              NOTE_IMAGE_URL_PREFIX +
              'highschool-anniversary.webp'
            "
            alt="high school anniversary note"
            class="brand-image__note-image"
            :style="{
              height: `${7 * currentScaleRatio}rem`,
              top: `${3.5 * currentScaleRatio}rem`,
              left: `${-8 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- inside the tunnel -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          right: `${-11 * currentScaleRatio}rem`,
          top: `${-25 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="insideTheTunnelData.posts[0].sourceUrl"
            alt="inside the tunnel main"
            class="brand-image__main-image"
            :style="{
              height: `${42 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="
              NOTE_IMAGE_URL_PREFIX +
              'inside-the-tunnel.webp'
            "
            alt="inside the tunnel note"
            class="brand-image__note-image"
            :style="{
              height: `${8 * currentScaleRatio}rem`,
              bottom: `${-4 * currentScaleRatio}rem`,
              right: `${-8 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- rambutan -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          left: `${24 * currentScaleRatio}rem`,
          bottom: `${-58 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="rambutanData.posts[0].sourceUrl"
            alt="rambutan main"
            class="brand-image__main-image"
            :style="{
              height: `${54 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="NOTE_IMAGE_URL_PREFIX + 'rambutan.webp'"
            alt="rambutan note"
            class="brand-image__note-image"
            :style="{
              height: `${11 * currentScaleRatio}rem`,
              bottom: `${6 * currentScaleRatio}rem`,
              left: `${-20 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- haulucid -->
      <div
        class="brand-image-wrapper--float"
        :style="{
          right: `${-4 * currentScaleRatio}rem`,
          bottom: `${-50 * currentScaleRatio}rem`,
        }"
      >
        <div class="brand-image">
          <img
            v-lazy="haulucidData.posts[0].sourceUrl"
            alt="haulucid main"
            class="brand-image__main-image"
            :style="{
              height: `${28 * currentScaleRatio}rem`,
            }"
          />
          <img
            v-lazy="NOTE_IMAGE_URL_PREFIX + 'haulucid.webp'"
            alt="haulucid note"
            class="brand-image__note-image"
            :style="{
              height: `${7 * currentScaleRatio}rem`,
              bottom: `${8 * currentScaleRatio}rem`,
              right: `${-14 * currentScaleRatio}rem`,
            }"
          />
        </div>
      </div>
      <!-- pencil -->
      <img
        src="/assets/images/popup/illustration/pencil.webp"
        alt="pencil"
        class="brands__icons"
        :style="{
          height: `${65 * currentScaleRatio}rem`,
          maxHeight: `${65 * currentScaleRatio}rem`,
          left: `${-31 * currentScaleRatio}rem`,
          bottom: `${-66 * currentScaleRatio}rem`,
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
}

.brands {
  position: relative;

  .brands__icons {
    position: absolute;
  }
}

.brand-image-wrapper--float {
  position: absolute;
}

.brand-image {
  position: relative;

  .brand-image__main-image {
    position: relative;
    transition:
      box-shadow 0.5s ease-in-out,
      z-index 0.5s ease-in-out;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

    &:hover {
      box-shadow:
        rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      z-index: 9;

      animation: zoom-in-out 1.5s ease-in-out infinite;
    }
  }

  .brand-image__main-image:hover
    + .brand-image__note-image {
    z-index: 10;
    animation: zoom-in-out 1.5s ease-in-out infinite;
  }

  .brand-image__note-image {
    position: absolute;
  }
}
</style>
