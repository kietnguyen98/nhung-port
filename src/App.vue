<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useMediaQueriesStore } from '@/stores';
import { NotSupportScreen } from '@/views';

const mediaQueriesStore = useMediaQueriesStore();
const { isNotSupport } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <NotSupportScreen v-if="isNotSupport" />
    <router-view v-if="!isNotSupport"> </router-view>
</template>
