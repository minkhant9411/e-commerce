<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                    subtitle="sandra_a88@gmailcom"></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-folder" to="/hello" link title="My Files" value="myfiles"></v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
                <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>Application</v-app-bar-title>
            <v-text-field density="compact" variant="solo-filled" label="Search...." append-inner-icon="mdi-magnify"
                single-line hide-details></v-text-field>
            <v-btn icon>
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main class="overflow-x-hidden">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)


</script>

<script>
export default {
    data: () => ({ drawer: null }),
}
</script>