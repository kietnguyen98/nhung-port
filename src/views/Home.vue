<script setup lang="ts">
    import Intro from "./sections/Intro.vue";
    import About from './sections/About.vue';
    import Contact from './sections/Contact.vue';
</script>

<template>
    <AppContainer>
        <Intro section-id="intro-section"/>
        <About section-id="about-section"/>
        <Contact section-id="contact-section"/>
    </AppContainer>
</template>