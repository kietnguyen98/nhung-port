<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.intro-section {
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 5rem * 2);
    padding: 5rem;
    background-color: #e3e2df;
    background-image: repeating-linear-gradient(
            45deg,
            #e3afbc 25%,
            transparent 25%,
            transparent 75%,
            #e3afbc 75%,
            #e3afbc
        ),
        repeating-linear-gradient(
            45deg,
            #e3afbc 25%,
            #e5e5f7 25%,
            #e5e5f7 75%,
            #e3afbc 75%,
            #e3afbc
        );
    background-position:
        0 0,
        2rem 2rem;
    background-size: 4rem 4rem;
}

.intro-content {
    .intro-content__title {
        text-align: center;
        margin-bottom: 4rem;
        padding: 4rem 8rem;
        background-color: #feffff;
        border-radius: 50%;
        border: 2px solid gray;
    }
}

.intro-content-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
}

.image-card {
    cursor: pointer;
    height: 35rem;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 1rem;
    outline-style: dashed;
    outline-color: #5d001e;
    overflow: hidden;

    .image-card__image {
        transition: all 0.5s ease-in-out;
        border-radius: 1rem;

        &:hover {
            transform: scale(1.25, 1.25);
        }
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="intro-section">
        <div class="intro-content">
            <div class="intro-content__title">
                <h1>Introduce Section</h1>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </h6>
            </div>
            <div class="intro-content-images">
                <div class="image-card">
                    <img
                        class="image-card__image"
                        src="/assets/images/image-1.jpg"
                    />
                </div>
                <div class="image-card">
                    <img
                        class="image-card__image"
                        src="/assets/images/image-2.jpg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
