<script setup lang="ts"></script>

<template>
  <div class="container">
    <img
      class="loading-image"
      src="/src/assets/images/loader-320px.gif"
    />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1rem);

  .loading-image {
  }

  .title {
    text-align: center;
    font-weight: bolder;
    color: var(--color-red);
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
