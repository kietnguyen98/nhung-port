<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.contact-section {
    min-height: 100vh;
}

.contact-content-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.contact-content-wrapper--enter-ani {
    transform: translateY(50%);
    opacity: 0;
    animation: slide-up linear forwards;
    animation-timeline: view(-30rem);
    animation-range: entry;
}

.contact-content-wrapper::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5rem;
    right: 0;
    background-repeat: repeat;
    height: 8rem;
    background-size: 8rem 8rem;
    background-image: radial-gradient(
        circle at 4rem 6rem,
        var(--color-blue) 4rem,
        transparent 4rem
    );
}

.contact-content {
    background-color: var(--color-blue);
    height: calc(100vh - 10rem - 5rem);
    width: 100%;
    margin-top: 10rem;
    padding: 0rem 5rem 5rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-content-text {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    color: var(--color-dark);
    gap: 7.5rem;

    .contact-content-text__title-group {
        h1 {
            font-size: 20rem;
            line-height: 0.8;
            text-transform: capitalize;
            font-style: italic;
        }
    }

    .contact-content-text__title-group--enter-ani {
        transform: translateX(-50rem);
        opacity: 0;
        /* animation */
        animation: fade-in-from-left linear forwards;
        animation-timeline: view(20rem);
        animation-range: entry;
    }

    .contact-content-text__info-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .contact-content-text__info-group--enter-ani {
        opacity: 0;
        /* animation */
        animation: fade-in-slow linear forwards;
        animation-timeline: view(2.5rem);
        animation-range: entry;
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

    .contact-content-images__image-1 {
        transform: translateY(13rem) rotateZ(-15deg);
    }

    .contact-content-images__image-2 {
        transform: translateY(5rem);
    }

    .contact-content-images__image-3 {
        transform: translateY(-3rem) translateX(3rem);
    }

    .contact-content-images__image-4 {
        transform: translateY(-5rem) translateX(5rem) rotateZ(-15deg);
    }

    .contact-content-images__image-5 {
        transform: translateX(5rem) rotateZ(10deg);
    }

    .contact-content-images__image--enter-ani {
        transform: perspective(20rem) scale(0) rotateY(-90deg);
        opacity: 0;
        /* animation */
        animation: flip-out-y linear forwards;
        animation-timeline: view(0rem);
        animation-range: entry;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="contact-section">
        <div class="contact-content-wrapper contact-content-wrapper--enter-ani">
            <div class="contact-content">
                <div class="contact-content-text">
                    <div
                        class="contact-content-text__title-group contact-content-text__title-group--enter-ani"
                    >
                        <h1 class="font-dancing-script">thank</h1>
                        <h1 class="font-dancing-script">you !</h1>
                    </div>
                    <div
                        class="contact-content-text__info-group contact-content-text__info-group--enter-ani"
                    >
                        <h6 class="font-lora">
                            <strong>Contact me at:</strong>
                        </h6>
                        <h6 class="font-lora">
                            Email: nhungnguyen07082000@gmail.com
                        </h6>
                        <h6 class="font-lora">Phone Number: 0766782000</h6>
                    </div>
                </div>
                <div class="contact-content-images">
                    <div class="contact-content-images__row">
                        <div class="contact-content-images__image-1">
                            <MaskedImage
                                image-src="/assets/images/image-4.jpg"
                                class="contact-content-images__image--enter-ani"
                                alt="masked-image-4"
                                :height-rem="20"
                                :mask-number="3"
                                :with-border="true"
                                border-color="#ff6868"
                            />
                        </div>

                        <div class="contact-content-images__image-2">
                            <MaskedImage
                                image-src="/assets/images/image-3.jpg"
                                class="contact-content-images__image--enter-ani"
                                alt="masked-image-3"
                                :height-rem="22.5"
                                :mask-number="5"
                                :with-border="true"
                                border-color="#ed5ab3"
                            />
                        </div>
                    </div>
                    <div class="contact-content-images__row">
                        <div class="contact-content-images__image-3">
                            <MaskedImage
                                image-src="/assets/images/image-2.jpg"
                                class="contact-content-images__image--enter-ani"
                                alt="masked-image-5"
                                :height-rem="15"
                                :mask-number="4"
                                :with-border="true"
                                border-color="#a1eebd"
                            />
                        </div>
                        <div class="contact-content-images__image-4">
                            <MaskedImage
                                image-src="/assets/images/image-1.jpg"
                                class="contact-content-images__image--enter-ani"
                                alt="masked-image-4"
                                :height-rem="15"
                                :mask-number="2"
                                :with-border="true"
                                border-color="#f6f7c4"
                            />
                        </div>
                        <div class="contact-content-images__image-5">
                            <MaskedImage
                                image-src="/assets/images/image-5.jpg"
                                class="contact-content-images__image--enter-ani"
                                alt="masked-image-5"
                                :height-rem="30"
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
