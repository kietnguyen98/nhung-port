<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.projects-section {
    padding: 0rem 0rem 10rem 0rem;
    background-color: var(--color-cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.projects-content {
    .projects-content__title {
        text-align: center;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: var(--color-red);
            font-size: 10rem;
            letter-spacing: -0.25rem;
            font-style: italic;
            font-weight: bolder;
            text-transform: capitalize;
            text-shadow:
                5px 2.5px 0px var(--color-pink),
                10px 5px 0px var(--color-blue),
                15px 7.5px 0px var(--color-green);
        }
    }

    .projects-content__title--enter-ani {
        /* animation */
        opacity: 0;
        transform: translateY(-20rem);
        scale: 0.5;
        animation: fade-in-from-top linear forwards;
        animation-timeline: view();
        animation-range: entry;
    }
}

.project-type-card-container {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
    align-items: center;
}

.project-type-card {
    .project-type-card__title {
        margin-top: 2rem;
        text-align: center;
    }
}

.project-type-card--enter-ani {
    transform: scale(0.25) translateY(-40rem);

    animation: scale-out-from-top linear forwards;
    animation-timeline: view();
    animation-range: entry 10rem;
}
</style>

<template>
    <div v-bind:id="sectionId" class="projects-section">
        <div class="projects-content">
            <div
                class="projects-content__title projects-content__title--enter-ani"
            >
                <h1 class="font-dancing-script">View all my works ...</h1>
            </div>
            <div class="project-type-card-container">
                <div class="project-type-card project-type-card--enter-ani">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-1"
                        :height-rem="25"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#fed9ed"
                    />
                    <h5 class="project-type-card__title">Graphic Design</h5>
                </div>
                <div class="project-type-card project-type-card--enter-ani">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                    <h5 class="project-type-card__title">Photography</h5>
                </div>
                <div class="project-type-card project-type-card--enter-ani">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="5"
                        :with-border="true"
                        border-color="#ed5ab3"
                    />
                    <h5 class="project-type-card__title">Video Editing</h5>
                </div>
                <div class="project-type-card project-type-card--enter-ani">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#a1eebd"
                    />
                    <h5 class="project-type-card__title">Illustration</h5>
                </div>
            </div>
        </div>
    </div>
</template>
