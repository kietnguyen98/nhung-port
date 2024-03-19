<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { NotSupportScreen } from '@/views';
import { useMediaQueriesStore } from '@/stores';

const mediaQueriesStore = useMediaQueriesStore();
const { isNotSupport } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <NotSupportScreen v-if="isNotSupport" />
    <router-view v-if="!isNotSupport"> </router-view>
</template>
