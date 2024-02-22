<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.contact-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: calc(100vh);
    background-color: #f6f7c4;
}

.contact-content-wrapper {
    position: relative;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 100%;
}

.contact-content-wrapper::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    right: 0;
    background-repeat: repeat;
    height: calc((100vw - 2rem) / 2);
    background-image: radial-gradient(
        circle at calc((100vw - 2rem) / 2) calc((100vw - 2rem) / 2 + 10rem),
        #f6f7c4 calc((105vw - 2rem) / 2),
        #7bd3ea calc((105vw - 2rem) / 2)
    );
}
.contact-content {
    position: absolute;
    z-index: 1;
    bottom: 0;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .contact-content__title {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.contact-content-images {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
}
</style>

<template>
    <div v-bind:id="sectionId" class="contact-section">
        <div class="contact-content-wrapper">
            <div class="contact-content">
                <h1 class="contact-content__title">Contact Section</h1>
                <div class="contact-content-images">
                    <MaskedImage
                        image-src="/assets/images/image-5.jpg"
                        alt="masked-image-5"
                        :height-rem="20"
                        :mask-number="1"
                        :with-border="true"
                        border-color="#a1eebd"
                    />
                    <MaskedImage
                        image-src="/assets/images/image-4.jpg"
                        alt="masked-image-4"
                        :height-rem="20"
                        :mask-number="2"
                        :with-border="true"
                        border-color="#ff6868"
                    />
                    <MaskedImage
                        image-src="/assets/images/image-3.jpg"
                        alt="masked-image-3"
                        :height-rem="20"
                        :mask-number="3"
                        :with-border="true"
                        border-color="#7bd3ea"
                    />
                </div>
                <div class="contact-content-images">
                    <MaskedImage
                        image-src="/assets/images/image-2.jpg"
                        alt="masked-image-5"
                        :height-rem="15"
                        :mask-number="4"
                        :with-border="true"
                        border-color="#a1eebd"
                    />
                    <MaskedImage
                        image-src="/assets/images/image-1.jpg"
                        alt="masked-image-4"
                        :height-rem="15"
                        :mask-number="5"
                        :with-border="true"
                        border-color="#ff6868"
                    />
                </div>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </h6>
            </div>
        </div>
    </div>
</template>
