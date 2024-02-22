<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavigationButton from './NavigationButton.vue';

const links = ref([
    { name: 'Intro', idName: 'intro', isActive: false },
    { name: 'About me', idName: 'about', isActive: false },
    { name: 'Works', idName: 'projects', isActive: false },
    { name: 'Graphic only', idName: 'graphic', isActive: false },
    { name: 'Contact', idName: 'contact', isActive: false },
]);
const currentActive = ref(links.value[0].idName);

const scrollWrapperElement = ref<HTMLElement>();

const isOnTop = ref<boolean>(true);

onMounted(() => {
    const sectionList: Array<{
        idName: string;
        element: HTMLElement;
    }> = links.value.map((link) => {
        const element = document.getElementById(
            `${link.idName}-section`
        ) as HTMLElement;
        return {
            idName: link.idName,
            element: element,
        };
    });

    scrollWrapperElement.value = document.getElementById(
        'scroll-wrapper'
    ) as HTMLElement;

    scrollWrapperElement.value.addEventListener('scroll', () => {
        sectionList.forEach((section) => {
            if (
                scrollWrapperElement.value?.scrollTop ===
                section.element.offsetTop
            ) {
                currentActive.value = section.idName;
                console.log(currentActive.value);
            }
        });

        if (scrollWrapperElement.value?.scrollTop === 0) {
            setTimeout(() => {
                isOnTop.value = true;
            }, 250);
        } else {
            isOnTop.value = false;
        }
    });
});
</script>

<style scoped>
.navigation-bar {
    margin: 0rem 5rem;
    width: calc(100vw - 2 * 5rem);
    position: absolute;
    top: 0.5rem;
    z-index: 1;
    padding: 0.5rem 0.75rem;
    border-radius: 5rem;
    border: 2px solid transparent;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    color: var(--color-white);
}

.navigation-bar--scrolled {
    border: 2px solid gray;
    background-color: white;
    color: var(--color-black);
}

.portfolio-owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .portfolio-owner__icon {
        width: 2.5rem;
        height: 2.25rem;
    }

    .portfolio-owner__name {
        font-weight: bold;
    }
}
.navigation-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>

<template>
    <div
        v-bind:class="{
            'navigation-bar': true,
            'navigation-bar--scrolled': !isOnTop,
        }"
    >
        <div class="portfolio-owner">
            <img
                class="portfolio-owner__icon"
                src="/assets/icons/mushroom.png"
            />
            <h6 class="portfolio-owner__name">Nhung's Port</h6>
        </div>
        <nav class="navigation-links">
            <NavigationButton
                v-for="link in links"
                :idName="link.idName"
                :name="link.name"
                :isActive="link.idName === currentActive"
                :isScrolled="!isOnTop"
            />
        </nav>
    </div>
</template>
