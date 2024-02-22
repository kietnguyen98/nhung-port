<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.graphic-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background-color: var(--color-pink);
}

.graphic-content-wrapper {
    display: flex;
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
    position: relative;
    height: calc(100%);
    display: flex;
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

.graphic-content__text-wrapper {
    position: relative;
    padding: 0rem 10rem 10rem 10rem;
    h6 {
        font-style: italic;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="graphic-section">
        <div class="graphic-content-wrapper">
            <div class="graphic-content">
                <CurvedText text="Graphic Design" />
                <div class="graphic-images">
                    <MaskedImage
                        class="graphic-images__images"
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="25"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                </div>
                <div class="graphic-content__text-wrapper">
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
