<script setup lang="ts">

</script>

<style scoped>
    .container-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem;
    }
</style>

<template>
    <NavigationBar/>
    <div class="container-wrapper">
        <div class="children">
            <slot></slot>
        </div>
    </div>
</template>