import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark",
    },
});

createApp(App).use(vuetify).use(router).use(createPinia()).mount("#app");
