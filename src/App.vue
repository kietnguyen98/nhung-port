<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useResponsiveStore } from '@/stores';
import {
  NotSupportScreen,
  OnResizingScreen,
} from '@/views';

const mediaQueriesStore = useResponsiveStore();
const { isNotSupport, isResizing } = storeToRefs(
  mediaQueriesStore
);

// responsive store
const { initEvent } = mediaQueriesStore;

onMounted(() => {
  // init media queries
  initEvent();
});
</script>

<template>
  <NotSupportScreen v-if="isNotSupport && !isResizing" />
  <OnResizingScreen v-if="isResizing" />
  <router-view v-if="!isNotSupport"> </router-view>
</template>
