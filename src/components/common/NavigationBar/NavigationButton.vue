<script setup lang="ts">
    defineProps<{
      idName: string
      name: string
      isActive: boolean
    }>()
</script>

<style scoped>
    .navigation-button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: unset;
        padding: 0.25rem 1rem;
        border: 2px solid transparent;
        border-radius: 1.5rem;
        transition: all 0.15s linear;
        
        & .navigation-button__name {
            text-transform: uppercase;
            font-weight: bold;    
        }

        &:hover {
            background: lightcyan;
            border-color: gray;
        }
    }

    .navigation-button--activated {
        background: lightcyan;
        border-color: gray;
    }
    
</style>

<template>
    <button :class="['navigation-button', isActive && 'navigation-button--activated']">
        <p class="navigation-button__name">{{ name }}</p>
    </button>
</template>