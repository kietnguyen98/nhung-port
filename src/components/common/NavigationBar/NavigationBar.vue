
<script setup lang="ts">
    import { ref } from "vue"
    import NavigationButton from "./NavigationButton.vue";

    const links = ref([{ name: 'Intro', href: "/#intro-section" }, {  name: 'About me', href: "/#about-section"}, {name: 'Contact', href: "/#contact-section"}])

</script> 

<style scoped>
    .navigation-bar-container{
        position: sticky;
        top: 0.5rem;
        z-index: 1;
        padding: 0.25rem 0.5rem;
        border-radius: 5rem;
        border: 1px solid gray;
        background-color: white;
        display: flex;
        justify-content: space-between;
    }

    .portfolio-owner{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .portfolio-owner-icon{
        width: 2.5rem;
        height: 2.25rem;
    }
    .navigation-links{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>

<template>
    <div class="navigation-bar-container">
        <div class="portfolio-owner">
            <img class="portfolio-owner-icon" src="/assets/icons/mushroom.png"/>
            <h6>Nhung's Port</h6>
        </div>
        <nav class="navigation-links">
            <NavigationButton v-for="link in links" :href="link.href" :name="link.name"/>
        </nav>
    </div>
</template>