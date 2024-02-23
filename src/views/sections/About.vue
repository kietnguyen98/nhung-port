<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.about-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background-color: var(--color-cream);
    height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-content {
    position: relative;
    height: calc(100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .about-content__title {
        text-align: center;
        margin-bottom: 5rem;
        font-size: 8rem;
        font-weight: bolder;
    }
}

.about-content__text-wrapper {
    width: 80rem;
    position: relative;

    h6 {
        text-align: center;
        position: absolute;
        width: 70%;
        top: 15rem;
        left: 15%;
        font-style: italic;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="about-section">
        <div class="about-content">
            <h1 class="about-content__title font-dancing-script">
                About Me ...
            </h1>
            <div class="about-content__text-wrapper">
                <img src="/assets/clip-masks/mask-6.png" />
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
        </div>
    </div>
</template>
