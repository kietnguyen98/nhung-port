<script setup lang="ts">
import { POST_TYPE_VALUES } from '@/constants';
import { TPost } from '@/types';

import { LoadingIndicator } from '..';

defineProps<{
    post: TPost;
}>();
</script>

<template>
    <div class="post post--enter--leave-ani">
        <img
            v-if="post.type === POST_TYPE_VALUES.PHOTO"
            v-lazy="post.sourceUrl"
            class="post__image"
        />
        <div
            v-if="post.type === POST_TYPE_VALUES.VIDEO"
            class="post__video-wrapper"
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
    height: calc(100vh - 5rem * 2);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.post--enter--leave-ani {
    transform: scale(0.75);

    animation:
        scale-in-slight linear forwards,
        scale-out-slight linear forwards;
    animation-timeline: view(), view();
    animation-range: entry, exit;
}

.post__image {
    height: auto;
    width: auto;
    border-radius: 1rem;
}

.post__video-wrapper {
    width: calc(100vw - 2 * 10rem);
    height: calc(100vh - 2 * 10rem);
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
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
</style>
