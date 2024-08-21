<script setup lang="ts">
// modules
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';

import { POST_TYPE_VALUES } from '@/constants';
import { useResponsiveStore } from '@/stores';
import { TPost } from '@/types';

// component props
const { post, shouldPadding } = withDefaults(
  defineProps<{
    post: TPost;
    shouldPadding?: boolean;
  }>(),
  {
    shouldPadding: true,
  }
);

// store
const responsiveStore = useResponsiveStore();
const {
  currentScaleRatio,
  currentViewHeight,
  currentViewWidth,
} = storeToRefs(responsiveStore);

const isLandscape = ref<boolean>(
  currentViewWidth.value > currentViewHeight.value
);

// update isLandscape value whenever window resize
watchEffect(() => {
  isLandscape.value =
    currentViewWidth.value > currentViewHeight.value;
});
</script>

<template>
  <div
    class="post-wrapper"
    :style="{
      width: isLandscape ? 'auto' : '100%',
      height: isLandscape ? '100%' : 'auto',
      paddingRight: `${shouldPadding ? 5 * currentScaleRatio : 0}rem`,
    }"
  >
    <div class="post">
      <img
        v-if="post.type === POST_TYPE_VALUES.PHOTO"
        :src="post.sourceUrl"
        :style="{
          width: isLandscape ? 'auto' : '100%',
          height: isLandscape ? '100%' : 'auto',
        }"
        :alt="'post-image ' + post.sourceUrl"
        class="post__image"
      />
    </div>
  </div>
</template>

<style scoped>
.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
}

.post {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.post__image {
  border-radius: 1rem;
}
</style>
