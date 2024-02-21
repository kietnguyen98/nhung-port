<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.about-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background-color: #f6f7c4;
    height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-content {
    position: relative;
    background-color: #a1eebd;
    height: calc(100% - 5rem * 2 - 1rem * 2);
    margin: 1rem;
    padding: 5rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    .about-content__title {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.about-content::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat;
    height: 4rem;
    background-size: 8rem 8rem;
    background-image: radial-gradient(
        circle at 4rem 0rem,
        #a1eebd 4rem,
        #f6f7c4 4rem
    );
}

.about-content-images {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    .about-content-images__image {
        height: 40rem;
        width: fit-content;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="about-section">
        <div class="about-content">
            <h1 class="about-content__title">About Section</h1>
            <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h6>
            <div class="about-content-images">
                <img
                    class="about-content-images__image"
                    src="/assets/images/image-3.jpg"
                />
                <img
                    class="about-content-images__image"
                    src="/assets/images/image-4.jpg"
                />
            </div>
        </div>
    </div>
</template>
