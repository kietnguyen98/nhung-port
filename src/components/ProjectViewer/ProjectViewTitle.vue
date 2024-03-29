<script setup lang="ts">
import { useResponsiveStore } from '@/stores';
import { TProjectIdName } from '@/types';

defineProps<{
    projectIdName: TProjectIdName;
}>();

const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = responsiveStore;
</script>
<template>
    <!-- icons -->
    <img
        src="/assets/images/butterfly-2.png"
        alt="butterfly 4"
        class="icon"
        :style="{
            height: `${19.5 * currentScaleRatio}rem`,
            top: `${49 * currentScaleRatio}rem`,
            left: `${13 * currentScaleRatio}rem`,
        }"
    />
    <img
        src="/assets/images/butterfly-4.png"
        alt="butterfly 4"
        class="icon"
        :style="{
            height: `${19.5 * currentScaleRatio}rem`,
            top: `${7 * currentScaleRatio}rem`,
            right: `${8 * currentScaleRatio}rem`,
        }"
    />
    <!-- project title -->
    <img
        v-if="projectIdName === 'graphic-design'"
        src="/assets/images/popup/graphic-design/title.png"
        alt="project view graphic design title"
        class="title"
        :style="{
            height: `${24 * currentScaleRatio}rem`,
            top: `${22.5 * currentScaleRatio}rem`,
            left: `${13 * currentScaleRatio}rem`,
        }"
    />
    <img
        v-if="projectIdName === 'motion-graphic'"
        src="/assets/images/popup/motion-graphic/title.png"
        alt="project view motion graphic title"
        class="title"
        :style="{
            height: `${25.5 * currentScaleRatio}rem`,
            top: `${21 * currentScaleRatio}rem`,
            left: `${16 * currentScaleRatio}rem`,
        }"
    />
    <img
        v-if="projectIdName === 'photo-life-style'"
        src="/assets/images/popup/photo-life-style/title.png"
        alt="project view photos life style title"
        class="title"
        :style="{
            height: `${22.25 * currentScaleRatio}rem`,
            top: `${22.75 * currentScaleRatio}rem`,
            left: `${14.5 * currentScaleRatio}rem`,
        }"
    />
    <img
        v-if="projectIdName === 'illustration'"
        src="/assets/images/popup/illustration/title.png"
        alt="project view photos life style title"
        class="title"
        :style="{
            height: `${27 * currentScaleRatio}rem`,
            top: `${21 * currentScaleRatio}rem`,
            left: `${23.5 * currentScaleRatio}rem`,
        }"
    />
</template>

<style scoped>
.icon {
    position: absolute;
    z-index: 1;
}
.title {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
