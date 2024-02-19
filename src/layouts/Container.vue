<script setup lang="ts">

</script>

<style scoped>

    .container-wrapper {
            position: relative;
            padding: 0rem 5rem;

            .container-children-wrapper {
                display: flex;
                flex-direction: column;
                gap: 5rem;
            }
    }
</style>

<template>
    <div class="container-wrapper">
        <NavigationBar/>
        <div class="container-children-wrapper">
            <slot></slot>
        </div>
    </div>
</template>