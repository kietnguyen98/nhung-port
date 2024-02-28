<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TSections } from '@/types/section.type';
import { blockWheelEvent, animateWheelEvent } from '@/utils/wheelEvent';
import CircleProgressBar from '@/components/circleProgressBar/CircleProgressBar.vue';

const MAXIMUM_PAGE_LENGTH = 99999;

const sections = ref<TSections>([
    { name: 'Intro', idName: 'intro', isActive: false },
    { name: 'About me', idName: 'about', isActive: false },
    { name: 'Works', idName: 'projects', isActive: false },
    { name: 'Contact', idName: 'contact', isActive: false },
]);
const currentActive = ref<string>(sections.value[0].idName);
const isOnTop = ref<boolean>(true);
const progress = ref<number>(0);

onMounted(() => {
    // block user scrolling for 1.5seconds, wait for all animations to be finished
    const scrollWrapperElement = document.getElementById(
        'scroll-wrapper'
    ) as HTMLElement;

    scrollWrapperElement.addEventListener('wheel', blockWheelEvent, {
        passive: false,
    });

    setTimeout(() => {
        scrollWrapperElement.removeEventListener('wheel', blockWheelEvent);
        scrollWrapperElement.addEventListener(
            'wheel',
            (e) => animateWheelEvent(e, scrollWrapperElement),
            {
                passive: false,
            }
        );
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

    const fullPageHeight = scrollWrapperElement.scrollHeight;

    scrollWrapperElement.addEventListener('scroll', () => {
        for (let i = 0; i < sectionList.length - 1; i++) {
            let currentSectionOffsetTop = sectionList[i]?.element.offsetTop;
            let nextSectionOffsetTop =
                sectionList[i + 1]?.element.offsetTop ?? MAXIMUM_PAGE_LENGTH;
            let wrapperScrollTop = scrollWrapperElement.scrollTop as number;
            if (
                wrapperScrollTop >= currentSectionOffsetTop &&
                wrapperScrollTop < nextSectionOffsetTop
            ) {
                currentActive.value = sectionList[i].idName;
            }
        }
        sectionList.forEach((section) => {
            if (scrollWrapperElement.scrollTop === section.element.offsetTop) {
                currentActive.value = section.idName;
            }
        });

        if (scrollWrapperElement.scrollTop === 0) {
            setTimeout(() => {
                isOnTop.value = true;
            }, 250);
        } else {
            isOnTop.value = false;
        }

        // check progress on scrolling
        progress.value =
            (scrollWrapperElement.scrollTop /
                (fullPageHeight -
                    2 * scrollWrapperElement.getBoundingClientRect().height)) *
            100;
    });
});
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
@/utils/wheelEvent
