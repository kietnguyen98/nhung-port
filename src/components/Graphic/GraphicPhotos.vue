<style scoped>
.graphic-photos-container {
    width: 100%;
    background-color: var(--color-brown);
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-photos {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-photos {
    flex: 1;
}

.view-more-button {
    outline: none;
    border: none;
    background-color: transparent;
    .view-more-button__text {
        transition: all 0.25s ease;
        line-height: 0.65;
    }
    .view-more-button__border {
        content: '';
        display: block;
        border-top: 0.25rem solid black;
        width: 0rem;
        transition: all 0.25s linear;
        transition-delay: 0.125s;
    }
    &:hover > .view-more-button__text {
        transform: translateY(-0.25rem);
    }

    &:hover > .view-more-button__border {
        width: 100%;
    }
}

.images-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .images-container__image-1 {
        transform: rotateZ(10deg);
    }

    .images-container__image-2 {
        transform: translateX(-2rem) translateY(-2rem) rotate(-15deg);
    }

    .images-container__image-3 {
        transform: translateX(1rem) rotate(15deg);
    }
}
</style>

<template>
    <div class="graphic-photos-container">
        <div class="left-photos">
            <MaskedImage
                class="left-photo__main-photo"
                image-src="/assets/images/image-4.jpg"
                alt="masked-image-1"
                :height-rem="50"
                :mask-number="4"
                :with-border="true"
                border-color="#ed5ab3"
            />
        </div>
        <div class="right-photos">
            <h3>
                Click
                <button class="view-more-button">
                    <h2 class="view-more-button__text">HERE</h2>
                    <span class="view-more-button__border"></span>
                </button>
            </h3>
            <h3>to see more...</h3>
            <div class="images-container">
                <MaskedImage
                    class="images-container__image-1"
                    image-src="/assets/images/image-3.jpg"
                    alt="masked-image-1"
                    :height-rem="15"
                    :mask-number="5"
                    :with-border="true"
                    border-color="#ed5ab3"
                />
            </div>
            <div class="images-container">
                <MaskedImage
                    class="images-container__image-2"
                    image-src="/assets/images/image-3.jpg"
                    alt="masked-image-2"
                    :height-rem="20"
                    :mask-number="2"
                    :with-border="true"
                    border-color="#7bd3ea"
                />
                <MaskedImage
                    class="images-container__image-3"
                    image-src="/assets/images/image-3.jpg"
                    alt="masked-image-3"
                    :height-rem="17.5"
                    :mask-number="3"
                    :with-border="true"
                    border-color="#a1eebd"
                />
            </div>
        </div>
    </div>
</template>
