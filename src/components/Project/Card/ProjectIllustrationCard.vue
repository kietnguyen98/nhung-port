<template>
    <div class="project-illustration-card">
        <img
            src="/assets/images/project-illustration frame.png"
            alt="project illustration frame"
            class="illustration__frame"
        />
        <img
            src="/assets/images/butterfly-1.png"
            alt="butterfly 1"
            class="illustration__sub-image-butterfly"
        />
        <div class="illustration__outer-image"></div>
    </div>
</template>

<style scoped>
.project-illustration-card {
    height: 55rem;
    position: relative;
    transform: translateY(20rem) translateX(2rem);

    .illustration__frame {
        position: relative;
        z-index: 1;
    }

    .illustration__sub-image-butterfly {
        position: absolute;
        height: 15rem;
        left: -20rem;
        bottom: 10rem;
    }

    .illustration__outer-image {
        height: 30rem;
        width: 29rem;
        transform: rotateZ(9deg);
        position: absolute;
        z-index: 0;
        top: 14.25rem;
        left: 6rem;

        /* background image settings */
        background-color: var(--color-dark);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
