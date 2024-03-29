<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { ProjectViewContent, ProjectViewTitle } from '@/components';
import { useControlPopupStore } from '@/stores';

const controlPopupStore = useControlPopupStore();
const { projectToView } = storeToRefs(controlPopupStore);
</script>

<template>
    <div class="project-view-wrapper">
        <img
            class="project-view__background"
            src="/assets/images/project-popup-view-bg.jpg"
            alt="project view background"
        />
        <ProjectViewTitle
            v-if="projectToView"
            :project-id-name="projectToView.idName"
        />
        <ProjectViewContent
            v-if="projectToView"
            :project-id-name="projectToView.idName"
        />
    </div>
</template>

<style scoped>
.project-view-wrapper {
    position: relative;
}

.project-view__background {
    width: 100vw;
    height: auto;
}

.project-view__title {
    position: absolute;
    top: 0;
    left: 0;
}

.project-view-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
