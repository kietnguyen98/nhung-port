<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.projects-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: calc(100vh);
    background-color: var(--color-cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.projects-content {
    .projects-content__title {
        text-align: center;

        h1 {
            color: var(--color-red);
            margin-bottom: 5rem;
            font-size: 10rem;
            letter-spacing: -0.25rem;
            font-style: italic;
        }
    }
}

.project-type-container {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
    align-items: center;
}

.project-type {
    .project-type__title {
        margin-top: 2rem;
        text-align: center;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="projects-section">
        <div class="projects-content">
            <div class="projects-content__title">
                <h1 class="font-dancing-script">View all my works...</h1>
            </div>
            <div class="project-type-container">
                <div class="project-type">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-1"
                        :height-rem="25"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#fed9ed"
                    />
                    <h5 class="project-type__title">Graphic Design</h5>
                </div>
                <div class="project-type">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                    <h5 class="project-type__title">Photography</h5>
                </div>
                <div class="project-type">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="5"
                        :with-border="true"
                        border-color="#ed5ab3"
                    />
                    <h5 class="project-type__title">Video Editing</h5>
                </div>
                <div class="project-type">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#a1eebd"
                    />
                    <h5 class="project-type__title">Illustration</h5>
                </div>
            </div>
        </div>
    </div>
</template>
