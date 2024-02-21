<script setup lang="ts">
defineProps<{
    imageSrc: string;
    alt: string;
    heightRem: number;
    borderColor: string;
    maskNumber: number;
}>();
</script>

<style scoped>
.mask-border {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.mask-border__image {
    z-index: 1;
    width: fit-content;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
}

.mask-border__border {
}
</style>

<template>
    <div
        class="mask-border"
        :style="{
            height: `${heightRem}rem`,
            backgroundColor: borderColor,
            maskImage: `url(../../../../public/assets/clip-masks/mask-${maskNumber}.png)`,
        }"
    >
        <img
            class="mask-border__image"
            :style="{
                height: `${heightRem}rem`,
                maskImage: `url(../../../../public/assets/clip-masks/mask-${maskNumber}.png)`,
            }"
            :src="imageSrc"
            :alt="alt"
        />
    </div>
</template>
