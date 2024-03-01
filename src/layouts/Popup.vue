<script setup lang="ts">
const props = defineProps<{
    opened: boolean;
}>();
</script>

<style scoped>
.popup-wrapper {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s ease-in-out;
}

.popup-wrapper--opened {
    visibility: visible;
    opacity: 1;
}

.popup-wrapper--closed {
    visibility: hidden;
    opacity: 0;
}

.popup-container {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    /* hiding scroll bar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}

.popup-container::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
</style>

<template>
    <div
        v-bind:class="[
            'popup-wrapper',
            props.opened ? 'popup-wrapper--opened' : 'popup-wrapper--closed',
        ]"
    >
        <div class="popup-container">
            <button @click="$emit('closePopup')">Close</button>
            <slot></slot>
        </div>
    </div>
</template>
