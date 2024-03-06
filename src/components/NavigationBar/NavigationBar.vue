<script setup lang="ts">
import NavigationButton from './NavigationButton.vue';
import { TSections } from '@/types';
defineProps<{
    isOnTop: boolean;
    sections: TSections;
    currentActive: string;
}>();
</script>

<style scoped>
.navigation-bar {
    margin: 0rem 5rem;
    width: calc(100vw - 2 * 5rem - 2 * 1.5rem);
    position: absolute;
    top: 0.5rem;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    border-radius: 5rem;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    color: var(--color-white);

    /* animation */
    animation: fade-in-normal 1.5s ease-in;
}

.navigation-bar--scrolled {
    background-color: white;
    color: var(--color-black);
    box-shadow:
        rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.portfolio-owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .portfolio-owner__icon {
        width: 1.75rem;
        height: 1.5rem;
    }

    .portfolio-owner__name {
        font-weight: bold;
    }
}
.navigation-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>

<template>
    <div
        v-bind:class="{
            'navigation-bar': true,
            'navigation-bar--scrolled': !isOnTop,
        }"
    >
        <div class="portfolio-owner">
            <img
                class="portfolio-owner__icon"
                src="/assets/icons/mushroom.png"
            />
            <p class="portfolio-owner__name">Nhung's Port</p>
        </div>
        <nav class="navigation-links">
            <NavigationButton
                v-for="section in sections"
                :idName="section.idName"
                :name="section.name"
                :isActive="section.idName === currentActive"
                :isScrolled="!isOnTop"
            />
        </nav>
    </div>
</template>
