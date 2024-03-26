<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { NavigationButton } from '@/components';
import { useResponsiveStore } from '@/stores';
import { TSections } from '@/types';
defineProps<{
    isOnTop: boolean;
    sections: TSections;
    currentActive: string;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div
        class="navigation-bar-container navigation-bar-enter-animation"
        :style="{
            paddingTop: `${7 * currentScaleRatio}rem`,
        }"
    >
        <div class="navigation-bar-wrapper">
            <img
                src="/assets/images/navigation-bar-logo.png"
                alt="navigation bar logo"
                class="navigation-bar__logo"
                :style="{
                    height: `${15 * currentScaleRatio}rem`,
                    maxHeight: `${15 * currentScaleRatio}rem`,
                }"
            />
            <div class="navigation-button-container">
                <NavigationButton
                    :key="sections[0].idName"
                    :id-name="sections[0].idName"
                    :name="sections[0].name"
                    :is-active="sections[0].idName === currentActive"
                    :is-scrolled="!isOnTop"
                />
                <NavigationButton
                    :key="sections[1].idName"
                    :id-name="sections[1].idName"
                    :name="sections[1].name"
                    :is-active="sections[1].idName === currentActive"
                    :is-scrolled="!isOnTop"
                />
                <div
                    class="blank-space"
                    :style="{
                        height: `100%`,
                        width: `${(15 * currentScaleRatio * 1024) / 648}rem`,
                    }"
                ></div>
                <NavigationButton
                    :key="sections[2].idName"
                    :id-name="sections[2].idName"
                    :name="sections[2].name"
                    :is-active="sections[2].idName === currentActive"
                    :is-scrolled="!isOnTop"
                />
                <NavigationButton
                    :key="sections[3].idName"
                    :id-name="sections[3].idName"
                    :name="sections[3].name"
                    :is-active="sections[3].idName === currentActive"
                    :is-scrolled="!isOnTop"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.navigation-bar-container {
    width: 100vw;
    position: absolute;
    z-index: 999;

    .navigation-bar-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navigation-bar__logo {
        position: absolute;
    }

    .navigation-button-container {
        width: 95vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 0rem;
        border-top: 0.2rem solid var(--color-dark);
        border-bottom: 0.2rem solid var(--color-dark);
    }
}

.navigation-bar-enter-animation {
    opacity: 0;
    animation: fade-in 1.5s linear forwards;
}
</style>
