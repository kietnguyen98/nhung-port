<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    imageSrc?: string;
    alt: string;
    heightRem: number;
    maskNumber: number;
    withBorder?: boolean;
    borderColor?: string;
    withHover?: boolean;
}>();

const isHovered = ref<boolean>(false);
const handleMouseEnter = () => {
    if (props.withHover) {
        isHovered.value = true;
    }
};
const handleMouseLeave = () => {
    if (props.withHover) {
        isHovered.value = false;
    }
};
</script>

<style scoped>
.mask-card {
    position: relative;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    padding: 0.5rem;
    transition: transform 0.5s ease;
    filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -webkit-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -moz-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -ms-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -o-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
}

.mask-card__mask {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: calc(100%);
    overflow: hidden;
    transition: background-color 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mask-text {
    transition: all 0.5s;
    font-weight: bolder;
}

.mask-text--appeared {
    opacity: 1;
}

.mask-text--disappeared {
    opacity: 0;
}

.mask-card__image {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    transition: all 0.5s ease;
}
</style>

<template>
    <div
        class="mask-card"
        :style="{
            height: heightRem ? `${heightRem}rem` : 'auto',
            backgroundColor: withBorder ? borderColor : 'transparent',
            maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
        }"
        :onmouseenter="handleMouseEnter"
        :onmouseleave="handleMouseLeave"
    >
        <div
            class="mask-card__mask"
            :style="{
                height: heightRem ? `${heightRem + 0.5 * 2}rem` : 'auto',
                maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
                backgroundColor: isHovered ? borderColor : 'transparent',
            }"
        >
            <h6
                :class="[
                    'mask-text',
                    isHovered
                        ? 'mask-text--appeared'
                        : 'mask-text--disappeared',
                ]"
            >
                View all work
            </h6>
        </div>
        <img
            class="mask-card__image"
            :style="{
                maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
            }"
            :src="imageSrc"
            :alt="alt"
        />
    </div>
</template>
