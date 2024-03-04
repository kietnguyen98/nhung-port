<script setup lang="ts">
defineProps<{
    imageSrc?: string;
    googleDriveId?: string;
    alt: string;
    heightRem: number;
    maskNumber: number;
    withBorder?: boolean;
    borderColor?: string;
}>();
</script>

<style scoped>
.mask-card {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    width: fit-content;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -webkit-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -moz-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -ms-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
    -o-filter: drop-shadow(0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5));
}
.mask-card__image {
    z-index: 1;
    width: fit-content;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
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
    >
        <img
            class="mask-card__image"
            :style="{
                maskImage: `url(/assets/clip-masks/mask-${maskNumber}.png)`,
            }"
            :src="
                imageSrc
                    ? imageSrc
                    : `https://lh3.googleusercontent.com/d/${googleDriveId}`
            "
            :alt="alt"
        />
    </div>
</template>
