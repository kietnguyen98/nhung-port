<script setup lang="ts">
import { useControlPopupStore } from '@/stores/controlPopupStore';
import { TBrand } from '@/types/project.type';
defineProps<{
    listBrands: Array<TBrand>;
}>();

const store = useControlPopupStore();
const { setIsPostViewerOpened, setBrandToView } = store;

const openPostViewer = (brandData: TBrand) => {
    setIsPostViewerOpened(true);
    setBrandToView(brandData);
};
</script>

<style scoped>
.brands-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    background-color: var(--color-pink);

    .brands-container__title {
        font-weight: bolder;
    }
}
.brand-logos-container {
    padding-top: 5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.brand-card {
    height: 12.5rem;
    width: 12.5rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    transition: all 0.5s ease;
    box-shadow:
        rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;

    .brand-card__logo-image {
        height: auto;
    }

    &:hover {
        transform: translateY(-0.5rem);
        box-shadow:
            rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
}
</style>

<template>
    <div class="brands-container">
        <h1 class="brands-container__title">Brands collaboration</h1>
        <h6 class="brands-container__title">
            click on brand's logo to view more
        </h6>
        <div class="brand-logos-container">
            <div
                class="brand-card"
                v-for="brand in listBrands"
                @:click="openPostViewer(brand)"
            >
                <img
                    class="brand-card__logo-image"
                    :src="brand.logoURL"
                    :alt="`${brand.name} Brand Logo`"
                />
            </div>
        </div>
    </div>
</template>
