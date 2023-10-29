import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [],
        categories: [],
    }),
    getters: {},
    actions: {
        getProducts() {
            axios.get("https://fakestoreapi.com/products").then((res) => {
                this.products = res.data;
            });
        },
        getCategories() {
            axios
                .get("https://fakestoreapi.com/products/categories")
                .then((res) => {
                    this.categories = res.data;
                });
        },
    },
});
