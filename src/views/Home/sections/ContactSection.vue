<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<template>
    <div :id="sectionId" class="contact-section"></div>
</template>

<style scoped>
.contact-section {
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
}
</style>
