<script setup lang="ts">
import { useResponsiveStore } from '@/stores';

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = responsiveStore;

const FILM_STRIP_WIDTH_SCALE_RATIO = 1.075;
</script>

<template>
    <div class="container">
        <div class="film-frame">
            <img
                src="/assets/images/popup/motion-graphic/film-frame.png"
                alt="motion graphic content film frame"
                :style="{
                    height: `${90 * currentScaleRatio}rem`,
                    maxHeight: `${90 * currentScaleRatio}rem`,
                    transform: `translateY(${5.5 * currentScaleRatio}rem)`,
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
</style>
