
<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
    }

    .nav-container{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>

<template>
    <div class="container">
        <div class="port-name">
            <h2>Nhung's Port</h2>
        </div>
        <nav class="nav-container">
            <router-link to="/"><h3>Home</h3></router-link> | <router-link to="/about"><h3>About</h3></router-link> | <router-link to="/contact"><h3>
                Contact
            </h3></router-link>
        </nav>
    </div>
</template>