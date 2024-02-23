<script setup lang="ts">
import { BRAND_LOGO_URL_PREFIX } from '@/constants';
import { ref } from 'vue';

const listBrandLogos = ref<
    Array<{
        name: string;
        url: string;
    }>
>([
    {
        name: 'megumi',
        url: `${BRAND_LOGO_URL_PREFIX}/50_megumi.png`,
    },
    {
        name: 'lip on lip',
        url: `${BRAND_LOGO_URL_PREFIX}/lip_on_lip.png`,
    },
    {
        name: 'lipice lipbalm',
        url: `${BRAND_LOGO_URL_PREFIX}/lipice_lipbalm.png`,
    },
    {
        name: 'rohto health science',
        url: `${BRAND_LOGO_URL_PREFIX}/rohto_health_science.png`,
    },
    {
        name: 'skin aqua',
        url: `${BRAND_LOGO_URL_PREFIX}/skin_aqua.png`,
    },
    {
        name: 'sociolla',
        url: `${BRAND_LOGO_URL_PREFIX}/sociolla.webp`,
    },
    {
        name: 'selsun',
        url: `${BRAND_LOGO_URL_PREFIX}/selsun.png`,
    },
    {
        name: 'hasaki',
        url: `${BRAND_LOGO_URL_PREFIX}/hasaki.png`,
    },
    {
        name: 'hannah olala',
        url: `${BRAND_LOGO_URL_PREFIX}/hannah_olala.png`,
    },
    {
        name: 'shark tank',
        url: `${BRAND_LOGO_URL_PREFIX}/sharktank.png`,
    },
    {
        name: 'huong nghiep day nghe',
        url: `${BRAND_LOGO_URL_PREFIX}/huong_nghiep_day_nghe.png`,
    },
]);
</script>

<style scoped>
.brand-logos-container {
    padding: 5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.brand-logo {
    width: 15rem;
    padding: 0.5rem 2rem;
}
</style>

<template>
    <div class="brand-logos-container">
        <img
            v-for="brandLogo in listBrandLogos"
            class="brand-logo"
            :src="brandLogo.url"
            :alt="`brand-logo-${brandLogo.name}`"
        />
    </div>
</template>
