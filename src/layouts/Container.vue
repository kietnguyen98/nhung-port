<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { TSections } from '@/types/section.type';
import { blockWheelEvent, animateWheelEvent } from '@/utils/wheelEvent';
import CircleProgressBar from '@/components/CircleProgressBar/CircleProgressBar.vue';
import { useControlPopupStore } from '@/stores/controlPopupStore';
import { storeToRefs } from 'pinia';

const store = useControlPopupStore();
const { isPopupOpened } = storeToRefs(store);

const MAXIMUM_PAGE_LENGTH = 99999;

const sections = ref<TSections>([
    { name: 'Intro', idName: 'intro', isActive: false },
    { name: 'About me', idName: 'about', isActive: false },
    { name: 'Works', idName: 'projects', isActive: false },
    { name: 'Contact', idName: 'contact', isActive: false },
]);
const containerScrollWrapperElement = ref<HTMLElement>();
const handleContainerWheelEvent = ref<(e: WheelEvent) => void>();
const currentActive = ref<string>(sections.value[0].idName);
const isOnTop = ref<boolean>(true);
const progress = ref<number>(0);

onMounted(() => {
    // block user scrolling for 1.5seconds, wait for all animations to be finished
    containerScrollWrapperElement.value = document.getElementById(
        'scroll-wrapper'
    ) as HTMLElement;

    handleContainerWheelEvent.value = (e) =>
        animateWheelEvent({
            event: e,
            scrollWrapperElement:
                containerScrollWrapperElement.value as HTMLElement,
        });

    containerScrollWrapperElement.value.addEventListener(
        'wheel',
        blockWheelEvent,
        {
            passive: false,
        }
    );

    setTimeout(() => {
        if (
            containerScrollWrapperElement.value &&
            handleContainerWheelEvent.value
        ) {
            containerScrollWrapperElement.value.removeEventListener(
                'wheel',
                blockWheelEvent
            );
            containerScrollWrapperElement.value.addEventListener(
                'wheel',
                handleContainerWheelEvent.value,
                {
                    passive: false,
                }
            );
        }
    }, 1500);

    // get current scrolled section
    const sectionList: Array<{
        idName: string;
        element: HTMLElement;
    }> = sections.value.map((section) => {
        const element = document.getElementById(
            `${section.idName}-section`
        ) as HTMLElement;
        return {
            idName: section.idName,
            element: element,
        };
    });

    const lastSection = document.getElementById(
        `${sections.value[sections.value.length - 1].idName}-section`
    ) as HTMLElement;
    const fullPageHeight = lastSection.getBoundingClientRect().bottom;

    containerScrollWrapperElement.value.addEventListener('scroll', () => {
        if (containerScrollWrapperElement.value) {
            for (let i = 0; i < sectionList.length - 1; i++) {
                let currentSectionOffsetTop = sectionList[i]?.element.offsetTop;
                let nextSectionOffsetTop =
                    sectionList[i + 1]?.element.offsetTop ??
                    MAXIMUM_PAGE_LENGTH;
                let wrapperScrollTop = containerScrollWrapperElement.value
                    .scrollTop as number;
                if (
                    wrapperScrollTop >= currentSectionOffsetTop &&
                    wrapperScrollTop < nextSectionOffsetTop
                ) {
                    currentActive.value = sectionList[i].idName;
                }
            }
            sectionList.forEach((section) => {
                if (
                    containerScrollWrapperElement.value?.scrollTop ===
                    section.element.offsetTop
                ) {
                    currentActive.value = section.idName;
                }
            });

            if (containerScrollWrapperElement.value.scrollTop === 0) {
                setTimeout(() => {
                    isOnTop.value = true;
                }, 250);
            } else {
                isOnTop.value = false;
            }

            // check progress on scrolling
            progress.value =
                (containerScrollWrapperElement.value.scrollTop /
                    (fullPageHeight -
                        containerScrollWrapperElement.value.getBoundingClientRect()
                            .height)) *
                100;
        }
    });
});

watch(
    () => isPopupOpened.value,
    (curValue) => {
        if (
            containerScrollWrapperElement.value &&
            handleContainerWheelEvent.value
        ) {
            if (curValue) {
                containerScrollWrapperElement.value.removeEventListener(
                    'wheel',
                    handleContainerWheelEvent.value
                );
            } else {
                containerScrollWrapperElement.value.addEventListener(
                    'wheel',
                    handleContainerWheelEvent.value,
                    {
                        passive: false,
                    }
                );
            }
        }
    }
);
</script>

<style scoped>
.container {
    position: relative;
    .container__scroll-wrapper {
        height: 100vh;
        background-color: var(--color-cream);
        overflow-y: scroll;
        overflow-x: hidden;

        /* hiding scroll bar */
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }

    .container__scroll-wrapper::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
}
</style>

<template>
    <div class="container">
        <NavigationBar
            :isOnTop="isOnTop"
            :sections="sections"
            :currentActive="currentActive"
        />
        <CircleProgressBar :progressValue="progress" />
        <div id="scroll-wrapper" class="container__scroll-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
@/utils/wheelEvent @/stores/controlPopupStore
