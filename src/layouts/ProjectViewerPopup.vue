<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { animateWheelEvent } from '@/utilities';
import { useControlPopupStore } from '@/stores';

const store = useControlPopupStore();
const { isPopupOpened } = storeToRefs(store);
const { setIsPopupOpened } = store;

const popupScrollWrapperElement = ref<HTMLElement>();
const handlePopupWheelEvent = ref<(e: WheelEvent) => void>();

onMounted(() => {
    popupScrollWrapperElement.value = document.getElementById(
        'popup-scroll-wrapper'
    ) as HTMLElement;

    handlePopupWheelEvent.value = (e: WheelEvent) =>
        animateWheelEvent({
            event: e,
            scrollWrapperElement:
                popupScrollWrapperElement.value as HTMLElement,
        });
});

watch(
    () => isPopupOpened.value,
    (curValue) => {
        if (handlePopupWheelEvent.value && popupScrollWrapperElement.value)
            if (curValue) {
                popupScrollWrapperElement.value.addEventListener(
                    'wheel',
                    handlePopupWheelEvent.value,
                    { passive: false }
                );
            } else {
                popupScrollWrapperElement.value.removeEventListener(
                    'wheel',
                    handlePopupWheelEvent.value
                );
            }
    }
);
</script>

<style scoped>
.popup-wrapper {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-shadow:
        rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.popup-wrapper--opened {
    animation: trans-background-color-to-dark 0.75s ease-in forwards;
    visibility: visible;
}

.popup-wrapper--closed {
    animation: trans-background-color-to-clear 0.75s ease-in forwards;
    transition: visibility 0.75s linear;
    visibility: hidden;
}

.popup-container {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    /* hiding scroll bar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}

.popup-container::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}

.popup-content {
    position: relative;

    .popup-content__close-button {
        position: absolute;
        top: 2rem;
        right: 3rem;
        z-index: 999;
        outline: none;
        border: none;
        font-size: 2rem;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        background-color: var(--color-red);
        color: var(--color-cream);
        box-shadow:
            rgba(0, 0, 0, 0.07) 0px 1px 2px,
            rgba(0, 0, 0, 0.07) 0px 2px 4px,
            rgba(0, 0, 0, 0.07) 0px 4px 8px,
            rgba(0, 0, 0, 0.07) 0px 8px 16px,
            rgba(0, 0, 0, 0.07) 0px 16px 32px,
            rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
}
.popup-content--enter-ani {
    transform: translateX(100%);
    animation: slide-left-ease-in 0.75s cubic-bezier(1, 0, 0.25, 0.9) forwards;
}

.popup-content--leave-ani {
    transform: translateX(0);
    animation: slide-right-ease-in 0.75s cubic-bezier(1, 0, 0.25, 0.9) forwards;
}
</style>

<template>
    <div
        v-bind:class="[
            'popup-wrapper',
            isPopupOpened ? 'popup-wrapper--opened' : 'popup-wrapper--closed',
        ]"
    >
        <div
            :class="{
                'popup-container': true,
            }"
            id="popup-scroll-wrapper"
        >
            <div
                :class="{
                    'popup-content': true,
                    'popup-content--enter-ani': isPopupOpened,
                    'popup-content--leave-ani': !isPopupOpened,
                }"
            >
                <button
                    class="popup-content__close-button"
                    @click="setIsPopupOpened(false)"
                >
                    X
                </button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
@/utilities/wheelEvent
