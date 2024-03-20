<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediaQueriesStore } from '@/stores';
import { COMPONENT_SCALE_RATIO } from '@/constants';

defineProps<{
    sectionId: string;
}>();

const mediaQueriesStore = useMediaQueriesStore();
const { currentScreen } = storeToRefs(mediaQueriesStore);
</script>

<template>
    <div :id="sectionId" class="contact-section">
        <div class="contact-content-wrapper contact-content-wrapper--enter-ani">
            <div
                class="contact-content"
                :style="{
                    width: `calc(100vw - ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem * 2)`,
                    height: `calc(100vh - ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem - ${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem * 2)`,
                    marginTop: `${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                    padding: `${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem ${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem ${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem`,
                }"
            >
                <div class="contact-content-text">
                    <div
                        class="contact-content-text__title-group"
                        :style="{
                            transform: `translateX(${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                        }"
                    >
                        <h1 class="fs-big font-dancing-script">thank</h1>
                        <h1 class="fs-big font-dancing-script">you !</h1>
                    </div>
                    <div
                        class="contact-content-text__info-group contact-content-text__info-group--enter-ani"
                        :style="{
                            transform: `translateX(${5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                        }"
                    >
                        <h6>
                            <strong>Contact me at:</strong>
                        </h6>
                        <h6>Email: nhungnguyen07082000@gmail.com</h6>
                        <h6>Phone Number: 0766782000</h6>
                    </div>
                </div>
                <div class="contact-content-images">
                    <div class="contact-content-images__row">
                        <div
                            :style="{
                                transform: `translateY(${20 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) rotateZ(-15deg)`,
                            }"
                        >
                            <MaskedImage
                                image-src="/assets/images/image-4.jpg"
                                alt="masked-image-4"
                                :height-rem="25"
                                :mask-number="3"
                                :with-border="true"
                                border-color="#ff6868"
                            />
                        </div>

                        <div
                            :style="{
                                transform: `translateY(${10 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)`,
                            }"
                        >
                            <MaskedImage
                                image-src="/assets/images/image-3.jpg"
                                alt="masked-image-3"
                                :height-rem="40"
                                :mask-number="5"
                                :with-border="true"
                                border-color="#ed5ab3"
                            />
                        </div>
                    </div>
                    <div class="contact-content-images__row">
                        <div
                            :style="{
                                transform: `translateY(${1.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem)  rotateZ(15deg)`,
                            }"
                        >
                            <MaskedImage
                                image-src="/assets/images/image-2.jpg"
                                alt="masked-image-5"
                                :height-rem="22.5"
                                :mask-number="6"
                                :with-border="true"
                                border-color="#a1eebd"
                            />
                        </div>
                        <div
                            :style="{
                                transform: `translateY(${1.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) rotateZ(-15deg)`,
                            }"
                        >
                            <MaskedImage
                                image-src="/assets/images/image-1.jpg"
                                alt="masked-image-4"
                                :height-rem="25"
                                :mask-number="2"
                                :with-border="true"
                                border-color="#f6f7c4"
                            />
                        </div>
                        <div
                            :style="{
                                transform: `translateY(${2.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) translateX(${-1.5 * COMPONENT_SCALE_RATIO[currentScreen.label]}rem) rotateZ(10deg)`,
                            }"
                        >
                            <MaskedImage
                                image-src="/assets/images/image-5.jpg"
                                alt="masked-image-5"
                                :height-rem="40"
                                :mask-number="1"
                                :with-border="true"
                                border-color="#a1eebd"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-section {
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
}

.contact-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.contact-content-wrapper--enter-ani {
    opacity: 0;
    animation: fade-in-only linear forwards;
    animation-timeline: view();
    animation-range: entry;
}

.contact-content::before {
    content: '';
    position: absolute;
    left: 0;
    top: calc(0rem - var(--bubble-size) / 2);
    right: 0;
    background-repeat: repeat;
    height: var(--bubble-size);
    background-size: var(--bubble-size) var(--bubble-size);
    background-image: radial-gradient(
        circle at calc(var(--bubble-size) / 2) calc(var(--bubble-size) / 2),
        var(--color-blue) calc(var(--bubble-size) / 2),
        transparent calc(var(--bubble-size) / 2)
    );
}

.contact-content {
    position: relative;
    background-color: var(--color-blue);
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-content-text {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--color-dark);

    .contact-content-text__title-group {
        h1 {
            line-height: 0.9;
            text-transform: capitalize;
            font-style: italic;
        }
    }
}

.contact-content-images {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .contact-content-images__row {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
}
</style>
