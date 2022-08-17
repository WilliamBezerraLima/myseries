<template>
    <v-container>

        <v-row align="center" justify="center">
            <v-col cols="12" class="d-flex">
                <v-text-field :append-icon="'mdi-magnify'" v-model="search" clear-icon="mdi-close-circle"
                    variant="underlined" clearable placeholder="Pesquise por filmes ou séries que deseja assistir"
                    hide-details="auto" type="text" @click:append="valid = !valid" @keydown.enter.prevent="">
                </v-text-field>
                <!-- <v-btn size="x-large" class="ml-2 align-self-auto" @click="">
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const valid = ref(true);
const search = ref('dexter');
</script>

<style scoped>
/* .v-btn {
    height: 56px;
    min-height: 56px;
}

.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
} */
</style>