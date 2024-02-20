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
    height: calc(100vh - 5rem * 2);
    padding: 5rem;
    background-color: #edeae5;
}

.intro-content {
    .intro-content__title {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.intro-content-images {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    .intro-content-images__image {
        height: 40rem;
        width: fit-content;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="intro-section">
        <div class="intro-content">
            <h1 class="intro-content__title">Introduce Section</h1>
            <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h6>
            <div class="intro-content-images">
                <img
                    class="intro-content-images__image"
                    src="/assets/images/image-1.jpg"
                />
                <img
                    class="intro-content-images__image"
                    src="/assets/images/image-2.jpg"
                />
            </div>
        </div>
    </div>
</template>
