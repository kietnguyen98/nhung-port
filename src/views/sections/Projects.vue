<script setup lang="ts">
import { ref } from 'vue';
import { useControlPopupStore } from '@/stores';
import { projectMockData } from '@/data';
import { TProject } from '@/types';
import { ProjectView } from '..';

defineProps<{
    sectionId: string;
}>();

const store = useControlPopupStore();
const { setIsPopupOpened } = store;

const graphicDesignMockData = projectMockData[0];
const photographyMockData = projectMockData[1];
const videoEditingMockData = projectMockData[2];

const currentShowedProject = ref<TProject>();

const handleSelectProjectToShow = (project: TProject) => {
    currentShowedProject.value = project;
    setIsPopupOpened(true);
};
</script>

<style scoped>
.projects-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.projects-content {
    .projects-content__title {
        text-align: center;
        height: 20rem;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            color: var(--color-red);
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
        animation:
            fade-in-from-top linear forwards,
            fade-out-to-top-with-scale linear forwards;
        animation-timeline: view(), view(0rem);
        animation-range: entry, exit;
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
        font-weight: bolder;
        color: var(--color-dark);
    }

    .project-type-card__title--text-shadow-pink {
        text-shadow: 2.5px 2.5px 0px var(--color-pink);
    }

    .project-type-card__title--text-shadow-blue {
        text-shadow: 2.5px 2.5px 0px var(--color-blue);
    }

    .project-type-card__title--text-shadow-purple {
        text-shadow: 2.5px 2.5px 0px var(--color-purple);
    }

    .project-type-card__title--text-shadow-green {
        text-shadow: 2.5px 2.5px 0px var(--color-green);
    }
}

.project-type-card--enter-ani {
    opacity: 0;
    transform: scale(0) translateY(-40rem);

    animation:
        scale-out-from-top linear forwards,
        scale-in-to-top linear forwards;
    animation-timeline: view(), view();
    animation-range: entry, exit;
}
</style>

<template>
    <div v-bind:id="sectionId" class="projects-section">
        <div class="projects-content">
            <div
                class="projects-content__title projects-content__title--enter-ani"
            >
                <h2 class="font-dancing-script">View all my work ...</h2>
            </div>
            <div class="project-type-card-container">
                <div
                    @:click="handleSelectProjectToShow(graphicDesignMockData)"
                    class="project-type-card project-type-card--enter-ani"
                >
                    <MaskedImage
                        :image-src="graphicDesignMockData.outerImageUrl"
                        alt="masked-image-1"
                        :height-rem="25"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#fed9ed"
                        :withHover="true"
                    />
                    <h5
                        class="project-type-card__title project-type-card__title--text-shadow-pink"
                    >
                        {{ graphicDesignMockData.name }}
                    </h5>
                </div>
                <div
                    @:click="handleSelectProjectToShow(photographyMockData)"
                    class="project-type-card project-type-card--enter-ani"
                >
                    <MaskedImage
                        :image-src="photographyMockData.outerImageUrl"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                        :withHover="true"
                    />
                    <h5
                        class="project-type-card__title project-type-card__title--text-shadow-blue"
                    >
                        {{ photographyMockData.name }}
                    </h5>
                </div>
                <div
                    @:click="handleSelectProjectToShow(videoEditingMockData)"
                    class="project-type-card project-type-card--enter-ani"
                >
                    <MaskedImage
                        :image-src="videoEditingMockData.outerImageUrl"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="5"
                        :with-border="true"
                        border-color="#ed5ab3"
                        :withHover="true"
                    />
                    <h5
                        class="project-type-card__title project-type-card__title--text-shadow-purple"
                    >
                        {{ videoEditingMockData.name }}
                    </h5>
                </div>
                <div class="project-type-card project-type-card--enter-ani">
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#a1eebd"
                        :withHover="true"
                    />
                    <h5
                        class="project-type-card__title project-type-card__title--text-shadow-green"
                    >
                        Illustration
                    </h5>
                </div>
            </div>
        </div>
    </div>
    <ProjectViewerPopup>
        <ProjectView
            v-if="currentShowedProject"
            :project="currentShowedProject"
        ></ProjectView>
    </ProjectViewerPopup>
    <PostViewerPopup />
</template>
