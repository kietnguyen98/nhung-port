<script setup lang="ts">
defineProps<{
    text: string;
}>();
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
    font-size: 10rem;
    font-weight: 300;
    letter-spacing: -0.25rem;
}
</style>

<template>
    <svg width="1040" height="520">
        <path id="curve" d="M 0 520 C 0 520, 520 0, 1040 520" />
        <text>
            <textPath
                xlink:href="#curve"
                class="font-dancing-script"
                startOffset="180"
            >
                {{ text }}
            </textPath>
        </text>
    </svg>
</template>
