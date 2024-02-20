<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.contact-section {
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: calc(100vh - 5rem * 2);
    padding: 5rem;
    background-color: #fef9c7;
}

.contact-content {
    .contact-content__title {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.contact-content-images {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    .contact-content-images__image {
        height: 40rem;
        width: fit-content;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="contact-section">
        <div class="contact-content">
            <h1 class="contact-content__title">Contact Section</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="contact-content-images">
                <img
                    class="contact-content-images__image"
                    src="/assets/images/image-5.jpg"
                />
            </div>
        </div>
    </div>
</template>
