<script setup lang="ts">
import { ref, onMounted } from 'vue';
defineProps<{
    text: string;
}>();

const popupViewWidth = ref<number>(0);

onMounted(() => {
    const popupScrollWrapperElement = document.getElementById(
        'popup-scroll-wrapper'
    ) as HTMLElement;
    popupViewWidth.value =
        popupScrollWrapperElement.getBoundingClientRect().width;

    window.addEventListener('resize', () => {
        popupViewWidth.value =
            popupScrollWrapperElement.getBoundingClientRect().width;
    });
});
</script>

<style scoped>
path {
    fill: transparent;
}

text {
    fill: var(--color-black);
}

textPath {
    text-align: center;
    font-weight: 300;
    letter-spacing: -0.25rem;
}
</style>

<template>
    <svg :width="(popupViewWidth * 2) / 3" :height="popupViewWidth / 3">
        <path
            id="title-curve"
            :d="`M 0 ${popupViewWidth / 3} C 0 ${popupViewWidth / 3}, ${popupViewWidth / 3} 0, ${(popupViewWidth * 2) / 3} ${popupViewWidth / 3}`"
        />
        <text>
            <textPath
                xlink:href="#title-curve"
                class="font-dancing-script"
                startOffset="50%"
                text-anchor="middle"
            >
                {{ text }}
            </textPath>
        </text>
    </svg>
</template>
