<template>
  <div class="container">
    <h1 class="title font-lora">
      This device resolution are not support on this
      website!. Please use a device with a higher resolution
      ( >= 1024 pixel in landscape) to view
    </h1>
  </div>
</template>

<style scoped>
.container {
  height: calc(100vh);
  width: calc(100vw);

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);

  .title {
    text-align: center;
    font-weight: bolder;
    color: var(--color-red);
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
