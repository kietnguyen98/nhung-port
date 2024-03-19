<style scoped>
.container {
    padding: 5rem;
    height: calc(100vh - 5rem * 2);
    width: calc(100vw - 5rem * 2);

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-red);

    .title {
        text-align: center;
        font-weight: bolder;
        color: var(--color-dark);
    }
}
</style>

<template>
    <div class="container">
        <h1 class="title font-lora">
            This device resolution are not support on this page!. Please use a
            device with a higher resolution to view
        </h1>
    </div>
</template>
