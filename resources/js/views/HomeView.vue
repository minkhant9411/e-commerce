<template>
    <v-container>
        <v-row>
            <template v-for="category in categories" :key="category.id">
                <v-col class="mt-2" cols="12">
                    <strong class="uppercase">{{ category }}</strong>
                </v-col>
                <div class="d-flex overflow-x-auto">
                    <div v-for="product in ProductsOfSameCategory(category)" :key="product.id" class="m-4">
                        <v-sheet height="200" width="150" class="overflow-hidden bg-white">
                            <div class=" w-full h-[50%] mt-4">
                                <img :src='product.image'
                                    class=" object-center object-contain h-full w-full hover:scale-110  ease-linear transition-all duration-300">
                            </div>
                        </v-sheet>
                    </div>
                </div>
            </template>
        </v-row>
    </v-container>
</template>


<script setup>


import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store/productStore';

const productStore = useProductStore();
const { products, categories } = storeToRefs(productStore);

productStore.getProducts();
productStore.getCategories();
const ProductsOfSameCategory = (category) => {
    return products.value.filter((p) => {
        return p.category === category
    })
}

</script>