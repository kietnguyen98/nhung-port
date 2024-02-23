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
    background-color: var(--color-pink);
}

.contact-content-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
        circle at 4rem 8rem,
        var(--color-blue) 4rem,
        var(--color-pink) 4rem
    );
}

.contact-content {
    background-color: var(--color-blue);
    height: calc(100vh - 10rem - 5rem);
    margin-top: 10rem;
    padding: 0rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
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
