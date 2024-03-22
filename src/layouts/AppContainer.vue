<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';

import { CircleProgressBar } from '@/components';
import { useControlPopupStore, useResponsiveStore } from '@/stores';
import { TSections } from '@/types';
import { animateWheelEvent, blockWheelEvent } from '@/utilities';

const mediaQueriesStore = useResponsiveStore();
const { initEvent } = mediaQueriesStore;

const store = useControlPopupStore();
const { isPopupOpened } = storeToRefs(store);

const MAXIMUM_PAGE_LENGTH = 99999;

const sections = ref<TSections>([
    { name: 'Intro', idName: 'intro', isActive: false },
    { name: 'About me', idName: 'about', isActive: false },
    { name: 'Work', idName: 'projects', isActive: false },
    { name: 'Contact', idName: 'contact', isActive: false },
]);
const containerScrollWrapperElement = ref<HTMLElement>();
const handleContainerWheelEvent = ref<(e: WheelEvent) => void>();
const currentActive = ref<string>(sections.value[0].idName);
const isOnTop = ref<boolean>(true);
const progress = ref<number>(0);

onMounted(() => {
    // init media queries
    initEvent();
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
        // 1500ms = time for intro section enter animation to finish
    }, 1500);

    // get sections List
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

    containerScrollWrapperElement.value.addEventListener('scroll', () => {
        if (containerScrollWrapperElement.value) {
            for (let i = 0; i <= sectionList.length - 1; i++) {
                const currentSectionOffsetTop =
                    sectionList[i]?.element.offsetTop;
                const nextSectionOffsetTop =
                    sectionList[i + 1]?.element.offsetTop ??
                    MAXIMUM_PAGE_LENGTH;
                const wrapperScrollTop = containerScrollWrapperElement.value
                    .scrollTop as number;

                if (
                    wrapperScrollTop >= currentSectionOffsetTop &&
                    wrapperScrollTop < nextSectionOffsetTop
                ) {
                    currentActive.value = sectionList[i].idName;
                }
            }

            if (containerScrollWrapperElement.value.scrollTop === 0) {
                setTimeout(() => {
                    isOnTop.value = true;
                }, 250);
            } else {
                isOnTop.value = false;
            }

            const fullPageHeight =
                containerScrollWrapperElement.value.scrollHeight;

            // check progress on scrolling
            progress.value =
                (containerScrollWrapperElement.value.scrollTop /
                    (fullPageHeight -
                        containerScrollWrapperElement.value.clientHeight)) *
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

<template>
    <div class="container">
        <NavigationBar
            :is-on-top="isOnTop"
            :sections="sections"
            :current-active="currentActive"
        />
        <CircleProgressBar :progress-value="progress" />
        <div id="scroll-wrapper" class="container__scroll-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    .container__scroll-wrapper {
        height: 100vh;
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
