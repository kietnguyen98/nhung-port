<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useResponsiveStore } from '@/stores';

defineProps<{
  sectionId: string;
}>();

const mediaQueriesStore = useResponsiveStore();
const { currentScaleRatio } = storeToRefs(
  mediaQueriesStore
);
</script>

<template>
  <div :id="sectionId" class="contact-section">
    <div
      class="contact-content-wrapper"
      :style="{
        marginTop: `${10 * currentScaleRatio}rem`,
        gap: `${7.5 * currentScaleRatio}rem`,
      }"
    >
      <div class="thankyou-text">
        <h1 class="fs-big font-DFVNRosmerta">Thank</h1>
        <h1 class="fs-big font-DFVNRosmerta">You !</h1>
      </div>
      <div
        :style="{
          paddingTop: `${10 * currentScaleRatio}rem`,
        }"
      >
        <h6><strong>Contact me at</strong></h6>
        <h6>Email: nhungnguyen0708work@gmail.com</h6>
        <h6>Phone number: 0766782000</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  width: 100vw;
  height: calc(100vw * 592 / 1024);
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(/assets/images/contact-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .contact-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thankyou-text {
    h1 {
      font-style: italic;
      line-height: 80%;
    }
  }
}
</style>
