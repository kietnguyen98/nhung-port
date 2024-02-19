
<style scoped>
    .navigation-bar-container{
        padding: 2rem;
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
            <h2>Nhung's Port</h2>
        </div>
        <nav class="navigation-links">
            <router-link to="/"><h3>Home</h3></router-link> | <router-link to="/about"><h3>About</h3></router-link> | <router-link to="/contact"><h3>
                Contact
            </h3></router-link>
        </nav>
    </div>
</template>