<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { CurvedText, ProjectBrands, ProjectDemoPhotos } from '@/components';
import { COMPONENT_SCALE_RATIO } from '@/constants';
import { useResponsiveStore } from '@/stores';
import { TProject } from '@/types';

defineProps<{
    project: TProject;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div class="graphic-section">
        <div class="graphic-content-wrapper">
            <div class="graphic-content">
                <CurvedText :text="project.name" />
                <div class="graphic-images">
                    <div
                        class="graphic-images__image-1"
                        :style="{
                            top: `${-15 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        }"
                    >
                        <MaskedImage
                            :image-src="project.introImageUrl[0]"
                            alt="masked-image-1"
                            :height-rem="50"
                            :mask-number="1"
                            :with-border="true"
                            border-color="#ed5ab3"
                        />
                    </div>
                    <div
                        class="graphic-images__image-2"
                        :style="{
                            left: `${-20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                            bottom: `${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        }"
                    >
                        <MaskedImage
                            :image-src="project.introImageUrl[1]"
                            alt="masked-image-2"
                            :height-rem="25"
                            :mask-number="2"
                            :with-border="true"
                            border-color="#7bd3ea"
                        />
                    </div>
                    <div
                        class="graphic-images__image-3"
                        :style="{
                            right: `${-20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                            bottom: `${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                        }"
                    >
                        <MaskedImage
                            :image-src="project.introImageUrl[2]"
                            alt="masked-image-3"
                            :height-rem="25"
                            :mask-number="3"
                            :with-border="true"
                            border-color="#a1eebd"
                        />
                    </div>
                </div>
                <div
                    class="graphic-content__text-wrapper"
                    :style="{
                        padding: `0rem ${20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem ${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem ${20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    }"
                >
                    <h6>
                        {{ project.description }}
                    </h6>
                </div>
            </div>
            <ProjectDemoPhotos
                :demo-images="project.demoImages"
            ></ProjectDemoPhotos>
            <ProjectBrands :list-brands="project.brands"></ProjectBrands>
        </div>
    </div>
</template>

<style scoped>
.graphic-section {
    background-color: var(--color-pink);
}

.graphic-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.graphic-content-wrapper::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    right: 0;
    background-repeat: repeat;
    height: calc(100vw / 2);
    background-image: radial-gradient(
        circle at calc(100vw / 2) calc(100vw / 2),
        var(--color-pink) calc(100vw / 2),
        var(--color-cream) calc(100vw / 2)
    );
}

.graphic-content {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.graphic-images {
    position: relative;
    display: flex;
    justify-content: center;

    .graphic-images__image-1 {
        position: relative;
    }

    .graphic-images__image-2 {
        position: absolute;
        transform: rotateZ(-25deg);
    }

    .graphic-images__image-3 {
        position: absolute;
        bottom: 10rem;
        right: -15rem;
        transform: rotateZ(25deg);
    }
}

.graphic-content__text-wrapper {
    position: relative;
    text-align: center;
}
</style>
