<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    idName: string;
    name: string;
    isActive: boolean;
    isScrolled: boolean;
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
    outline: none;
    border: none;
    padding: 0.2rem 0.75rem;
    outline-style: solid;
    outline-width: 2px;
    border-radius: 1.5rem;
    transition: all 0.25s linear;
    background-color: transparent;
    outline-color: transparent;

    & .navigation-button__name {
        text-transform: capitalize;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
    }

    &:hover {
        padding: 0.25rem 1rem;
    }
}

.navigation-button--on-top {
    & .navigation-button__name {
        color: var(--color-white);
    }

    &:hover {
        background-color: darkcyan;
        outline-color: gray;
    }
}

.navigation-button--on-top--activated {
    background-color: darkcyan;
    outline-color: gray;
    padding: 0.25rem 1rem;
}

.navigation-button--scrolled {
    &.navigation-button__name {
        color: var(--color-black) !important;
    }

    &:hover {
        background-color: lightcyan;
        outline-color: gray;
    }
}

.navigation-button--scrolled--activated {
    background-color: lightcyan;
    outline-color: gray;
    padding: 0.25rem 1rem;
}
</style>

<template>
    <button
        v-bind:class="[
            'navigation-button',
            isScrolled
                ? 'navigation-button--scrolled'
                : 'navigation-button--on-top',
            isActive &&
                (isScrolled
                    ? 'navigation-button--scrolled--activated'
                    : 'navigation-button--on-top--activated'),
        ]"
        @click="navigateToTarget"
    >
        <p class="navigation-button__name font-pacifico">{{ name }}</p>
    </button>
</template>
