<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { COMPONENT_SCALE_RATIO, POST_TYPE_VALUES } from '@/constants';
import { useResponsiveStore } from '@/stores';
import { TPost } from '@/types';

import { LoadingIndicator } from '..';

defineProps<{
    post: TPost;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div class="post">
        <img
            v-if="post.type === POST_TYPE_VALUES.PHOTO"
            v-lazy="post.sourceUrl"
            class="post__image"
        />
        <div
            v-if="post.type === POST_TYPE_VALUES.VIDEO"
            class="post__video-wrapper"
            :style="{
                height: `calc(100vh - 2 * ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                width: `calc(100vw - 2 * ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
            }"
        >
            <LoadingIndicator></LoadingIndicator>
            <iframe
                :src="post.sourceUrl"
                class="post__video"
                allow="autoplay; fullscreen"
                frameborder="0"
            ></iframe>
        </div>
    </div>
</template>

<style scoped>
.post {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.post__image {
    height: 100%;
    width: auto;
    border-radius: 1rem;
}

.post__video-wrapper {
    position: relative;
    border-radius: 1rem;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
}

.post__video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
}
</style>
