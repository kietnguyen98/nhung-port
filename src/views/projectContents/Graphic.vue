<script setup lang="ts">
import GraphicPhotos from '@/components/Graphic/GraphicPhotos.vue';
import GraphicBrands from '@/components/Graphic/GraphicBrands.vue';
</script>

<style scoped>
.graphic-section {
    background-color: var(--color-pink);
}

.graphic-content-wrapper {
    display: flex;
    flex-direction: column;
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
    display: flex;
    position: relative;
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

.graphic-images {
    position: relative;
    display: flex;
    justify-content: center;
    .graphic-images__image-1 {
        position: relative;
        top: -10rem;
    }

    .graphic-images__image-2 {
        position: absolute;
        bottom: 10rem;
        left: -15rem;
        transform: rotateZ(-25deg);
    }

    .graphic-images__image-3 {
        position: absolute;
        bottom: 10rem;
        right: -15rem;
        transform: rotateZ(25deg);
    }
}

.graphic-content__text-wrapper {
    position: relative;
    padding: 0rem 20rem 10rem 20rem;

    h6 {
        text-align: center;
    }
}
</style>

<template>
    <div class="graphic-section">
        <div class="graphic-content-wrapper">
            <div class="graphic-content">
                <CurvedText text="Graphic Design" />
                <div class="graphic-images">
                    <MaskedImage
                        class="graphic-images__image-1"
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-1"
                        :height-rem="30"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#ed5ab3"
                    />
                    <MaskedImage
                        class="graphic-images__image-2"
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-2"
                        :height-rem="15"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                    <MaskedImage
                        class="graphic-images__image-3"
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-3"
                        :height-rem="15"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#a1eebd"
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
            <GraphicPhotos></GraphicPhotos>
            <GraphicBrands></GraphicBrands>
        </div>
    </div>
</template>
