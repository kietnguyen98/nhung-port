<script setup lang="ts">
import { CardImage } from '@/components';
import { TDemoImages } from '@/types';
defineProps<{ demoImages: TDemoImages }>();
</script>
<style scoped>
.graphic-photos-container {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-image: url('/assets/images/textured-paper.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-photos {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    padding-right: 5rem;
}

.right-photos {
    flex: 1;

    color: var(--color-dark);
}

.view-more-button {
    outline: none;
    border: none;
    background-color: transparent;
    .view-more-button__text {
        transition: all 0.25s ease;
        line-height: 0.65;
    }
    .view-more-button__border {
        content: '';
        display: block;
        border-top: 0.25rem solid black;
        width: 0rem;
        transition: all 0.25s linear;
        transition-delay: 0.125s;
    }
    &:hover > .view-more-button__text {
        transform: translateY(-0.25rem);
    }

    &:hover > .view-more-button__border {
        width: 100%;
    }
}

.images-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .images-container__image-1 {
        transform: rotateZ(10deg);
    }

    .images-container__image-2 {
        transform: translateX(0rem) translateY(-2rem) rotate(-15deg);
    }

    .images-container__image-3 {
        transform: translateX(1rem) rotate(15deg);
    }
}
</style>

<template>
    <div class="graphic-photos-container">
        <div class="left-photos">
            <CardImage
                :image-src="demoImages.mainImageUrl"
                alt="masked-image-1"
            />
        </div>
        <div class="right-photos">
            <h5>
                Click
                <button class="view-more-button">
                    <h4 class="view-more-button__text">HERE</h4>
                    <span class="view-more-button__border"></span>
                </button>
            </h5>
            <h5>to see more...</h5>
            <div class="images-container">
                <CardImage
                    class="images-container__image-1"
                    :height-rem="17.5"
                    :image-src="demoImages.subImageUrls[0]"
                    alt="masked-image-2"
                />
            </div>
            <div class="images-container">
                <CardImage
                    class="images-container__image-2"
                    :height-rem="15"
                    :image-src="demoImages.subImageUrls[1]"
                    alt="masked-image-3"
                />
                <CardImage
                    class="images-container__image-3"
                    :height-rem="17.5"
                    :image-src="demoImages.subImageUrls[2]"
                    alt="masked-image-4"
                />
            </div>
        </div>
    </div>
</template>
