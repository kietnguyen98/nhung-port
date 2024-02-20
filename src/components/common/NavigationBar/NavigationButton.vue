<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    idName: string;
    name: string;
    isActive: boolean;
}>();

const navigateToTarget = ref<() => void>();

onMounted(() => {
    const targetElement = document.getElementById(
        `${props.idName}-section`
    ) as HTMLElement;

    navigateToTarget.value = () => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
});
</script>

<style scoped>
.navigation-button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: unset;
    padding: 0.2rem 0.75rem;
    outline-style: solid;
    outline-width: 2px;
    outline-color: transparent;
    border-radius: 1.5rem;
    transition: all 0.2s linear;

    & .navigation-button__name {
        text-transform: uppercase;
        font-weight: bold;
    }

    &:hover {
        background: lightcyan;
        outline-color: gray;
        padding: 0.25rem 1rem;
    }
}

.navigation-button--activated {
    background: lightcyan;
    outline-color: gray;
    padding: 0.25rem 1rem;
}
</style>

<template>
    <button
        :class="[
            'navigation-button',
            isActive && 'navigation-button--activated',
        ]"
        @click="navigateToTarget"
    >
        <p class="navigation-button__name">{{ name }}</p>
    </button>
</template>
