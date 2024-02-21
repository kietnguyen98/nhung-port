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
    background-color: #f6f7c4;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.projects-content {
    .projects-content__title {
        padding: 5rem;
        text-align: center;

        h1 {
            color: #ff6868;
            margin-bottom: 2rem;
            font-weight: bolder;
        }

        p {
            font-style: italic;
        }
    }
}

.project-contents-images-wrapper {
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-bottom: 1rem;
    background-color: #7bd3ea;
}

.project-contents-images-wrapper::before {
    content: '';
    position: absolute;
    left: 0;
    top: -4rem;
    right: 0;
    background-repeat: repeat;
    height: 4rem;
    background-size: 8rem 8rem;
    background-image: radial-gradient(circle at 4rem 4rem, #7bd3ea 4rem, #f6f7c4 4rem);
}
.projects-content-images {
    overflow: hidden;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
    .projects-content-images__image {
        height: 22.5rem;
        width: fit-content;
        border-radius: 2rem;
        animation: card-border-glowing 1.5s infinite;
        transition: all 0.5s ease-in-out;

        &:hover {
            transform: scale(1.025, 1.025);
        }
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="projects-section">
        <div class="projects-content">
            <div class="projects-content__title">
                <h1>Projects Section</h1>
                <p class="font-lora">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="project-contents-images-wrapper">
                <div class="projects-content-images">
                    <img class="projects-content-images__image" src="/assets/images/image-1.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-2.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-3.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-4.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-5.jpg" />
                </div>
                <div class="projects-content-images">
                    <img class="projects-content-images__image" src="/assets/images/image-5.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-4.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-3.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-2.jpg" />
                    <img class="projects-content-images__image" src="/assets/images/image-1.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>
