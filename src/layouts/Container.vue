<script setup lang="ts"></script>

<style scoped>
.container {
    height: 100vh;
    position: relative;
    .container__scroll-wrapper {
        height: 100vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
        /* scroll-snap-type: y mandatory; */

        /* hiding scroll bar */
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }

    .container__scroll-wrapper::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
}
</style>

<template>
    <div class="container">
        <NavigationBar />
        <div id="scroll-wrapper" class="container__scroll-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
