<script setup lang="ts">
    defineProps<{
      href: string
      name: string
    }>()
</script>

<style scoped>
    .navigation-button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: unset;
        padding: 0.25rem 1rem;
        border: 1px solid transparent;
        border-radius: 1.5rem;
        transition: all 0.15s linear;
        
        & .navigation-button-name {
            text-transform: uppercase;
            font-weight: bold;    
        }

        &:hover {
            background: lightcyan;
            border-color: gray;
        }
    }
</style>

<template>
    <a :href="href">
        <button class="navigation-button">
            <p class="navigation-button-name">{{ name }}</p>
        </button>
    </a>
</template>