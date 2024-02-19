<script setup lang="ts">
    defineProps<{
      sectionId: string
    }>()
</script>

<style scoped>
    .intro-section {
        padding-top: 5rem;
        .intro-section-title{
            text-align: center;
            margin-bottom: 2rem;
        }
        .intro-section-images-container{
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }
</style>

<template>
    <div v-bind:id="sectionId" class="intro-section">
        <h1 class="intro-section-title">Introduce Section</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="intro-section-images-container">
            <img src="/assets/images/image-1.jpg"/>
            <img src="/assets/images/image-2.jpg"/>
        </div>
    </div>
</template>