<script setup lang="ts">
import ProjectDemoPhotos from '@/components/Project/ProjectDemoPhotos.vue';
import ProjectBrands from '@/components/Project/ProjectBrands.vue';
import { TProject } from '@/types/project.type';

defineProps<{
    project: TProject;
}>();
</script>

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
    .graphic-content__title {
        text-align: center;
        margin-bottom: 5rem;
        font-size: 10rem;
        font-weight: 300;
    }
}

.graphic-images {
    position: relative;
    display: flex;
    justify-content: center;
    .graphic-images__image-1 {
        position: relative;
        top: -10rem;
    }

    .graphic-images__image-2 {
        position: absolute;
        bottom: 10rem;
        left: -15rem;
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
    padding: 0rem 20rem 5rem 20rem;

    p {
        text-align: center;
    }
}
</style>

<template>
    <div class="graphic-section">
        <div class="graphic-content-wrapper">
            <div class="graphic-content">
                <CurvedText :text="project.name" />
                <div class="graphic-images">
                    <MaskedImage
                        class="graphic-images__image-1"
                        :image-src="project.introImageUrl[0]"
                        alt="masked-image-1"
                        :height-rem="30"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#ed5ab3"
                    />
                    <MaskedImage
                        class="graphic-images__image-2"
                        :image-src="project.introImageUrl[1]"
                        alt="masked-image-2"
                        :height-rem="17.5"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                    <MaskedImage
                        class="graphic-images__image-3"
                        :image-src="project.introImageUrl[2]"
                        alt="masked-image-3"
                        :height-rem="17.5"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#a1eebd"
                    />
                </div>
                <div class="graphic-content__text-wrapper">
                    <p>
                        {{ project.description }}
                    </p>
                </div>
            </div>
            <ProjectDemoPhotos
                :demo-images="project.demoImages"
            ></ProjectDemoPhotos>
            <ProjectBrands :list-brands="project.brands"></ProjectBrands>
            <!-- <iframe
                src="https://drive.google.com/file/d/1wy303G6hR9a7TMVLQp1RuD7T4fQ9_SsR/preview"
                width="100%"
                height="1000px"
                allow="autoplay"
                frameborder="0"
                allowfullscreen
            ></iframe> -->
        </div>
    </div>
</template>
