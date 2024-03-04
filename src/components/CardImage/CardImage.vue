<script setup lang="ts">
defineProps<{
    imageSrc?: string;
    googleDriveId?: string;
    alt: string;
    heightRem?: number;
}>();
</script>

<style scoped>
.image-wrapper {
    padding: 1rem;
    background-color: var(--color-white);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.image {
    border-radius: 1.5rem;
}
</style>

<template>
    <div class="image-wrapper">
        <img
            :src="
                imageSrc
                    ? imageSrc
                    : `https://lh3.googleusercontent.com/d/${googleDriveId}`
            "
            :alt="alt"
            :style="{ height: heightRem ? `${heightRem}rem` : '100%' }"
            class="image"
        />
    </div>
</template>
