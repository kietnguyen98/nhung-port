<script setup lang="ts">
const props = defineProps<{ progressValue: number }>();
</script>

<style scoped>
.progress-bar {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2rem;
    right: 4rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 40px 10px rgba(255, 46, 182, 0.45);
    -moz-box-shadow: 0px 0px 40px 10px rgba(255, 46, 182, 0.45);
    box-shadow: 0px 0px 40px 10px rgba(255, 46, 182, 0.45);
}

.progress-bar--enter-ani {
    transform: scale(0);
    opacity: 0;
    /* animation */
    animation: scale-out 1.5s ease forwards;
}
</style>

<template>
    <div
        class="progress-bar progress-bar--enter-ani"
        :style="{
            background: `radial-gradient(
            closest-side,
            var(--color-white) 79%,
            transparent 80% 100%
        ),
        conic-gradient(var(--color-purple) ${props.progressValue}%, var(--color-pink) 0)`,
        }"
    >
        <img
            src="/assets/icons/flower.png"
            :style="{
                transform: `rotateZ(${(props.progressValue / 100) * 360}deg)`,
            }"
        />
    </div>
</template>
