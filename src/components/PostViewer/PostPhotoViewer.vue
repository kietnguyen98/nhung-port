<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { POST_TYPE_VALUES } from '@/constants';
import { useResponsiveStore } from '@/stores';
import { TPost } from '@/types';
const responsiveStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(responsiveStore);
defineProps<{
  post: TPost;
}>();
</script>

<template>
  <div
    class="post-wrapper"
    :style="{
      paddingRight: `${5 * currentScaleRatio}rem`,
    }"
  >
    <div class="post">
      <img
        v-if="post.type === POST_TYPE_VALUES.PHOTO"
        v-lazy="post.sourceUrl"
        :alt="'post-image ' + post.sourceUrl"
        class="post__image"
      />
    </div>
  </div>
</template>

<style scoped>
.post-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
}

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
</style>
