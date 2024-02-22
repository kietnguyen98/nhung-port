<script setup lang="ts">
defineProps<{
    imageSrc: string;
    alt: string;
    heightRem: number;
    maskNumber: number;
    withBorder?: boolean;
    borderColor?: string;
}>();
</script>

<style scoped>
.mask-border {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    width: fit-content;
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
</style>

<template>
    <div
        class="mask-border"
        :style="{
            height: `${heightRem}rem`,
            backgroundColor: withBorder ? borderColor : 'transparent',
            maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
        }"
    >
        <img
            class="mask-border__image"
            :style="{
                maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
            }"
            :src="imageSrc"
            :alt="alt"
        />
    </div>
</template>
