<script setup lang="ts">
import {
  AboutSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
} from '.';
</script>

<template>
  <AppContainer>
    <div class="home-page-intro">
      <IntroSection section-id="intro-section" />
    </div>
    <div class="home-page-about-project-contact">
      <AboutSection section-id="about-section" />
      <ProjectsSection section-id="projects-section" />
      <ContactSection section-id="contact-section" />
    </div>
  </AppContainer>
</template>
..
<style scoped>
.home-page-intro {
  background-image: url(/assets/images/home-page-bg.webp);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.home-page-about-project-contact {
  background-image: url(/assets/images/paper-bg.webp);
  background-position: center;
  background-size: contain;
  background-repeat: repeat-y;
}
</style>
