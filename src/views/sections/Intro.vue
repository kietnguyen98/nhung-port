<script setup lang="ts">
defineProps<{
    sectionId: string;
}>();
</script>

<style scoped>
.intro-section {
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: calc(100vh - 1.5rem * 2);
    padding: 1.5rem;
    background-color: #f6f7c4;
    background-image: repeating-linear-gradient(
            45deg,
            #ff6868 25%,
            transparent 25%,
            transparent 75%,
            #ff6868 75%,
            #ff6868
        ),
        repeating-linear-gradient(
            45deg,
            #ff6868 25%,
            #f6d6d6 25%,
            #f6d6d6 75%,
            #ff6868 75%,
            #ff6868
        );
    background-position:
        0 0,
        1.5rem 1.5rem;
    background-size: 3rem 3rem;
}
.intro-content {
    background-color: #7bd3ea;
    height: calc(100vh - 5rem * 2 - 1.5rem * 2);
    padding: 5rem;
    border-radius: 1.5rem;
    .intro-content__title {
        text-align: center;
        margin-bottom: 4rem;
        color: white;

        h1,
        h4 {
            line-height: 1.25;
            text-shadow: 1.5px 1.5px darkred;
        }

        h1 {
            margin-bottom: 2rem;
        }
    }
}
.bubble-text {
    margin: 10rem;
    height: 40rem;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        widows: 100%;
    }

    p {
        position: absolute;
        z-index: 1;
        width: 70%;
        color: black;
        font-weight: bolder;
        font-style: italic;
    }
}
</style>

<template>
    <div v-bind:id="sectionId" class="intro-section">
        <div class="intro-content">
            <div class="intro-content__title">
                <h4>Welcome to</h4>
                <h1 class="font-pacifico">Hồng Nhung Portfolio</h1>
                <div class="bubble-text">
                    <img src="/assets/clip-masks/mask-6.png" />
                    <p class="font-lora">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
