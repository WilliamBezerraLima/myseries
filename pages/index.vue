<template>
    <v-form>
        <v-container class="pa-4 text-center">
            <v-row align="center" justify="center">
                <v-col cols="11">
                    <v-text-field v-model="search" clear-icon="mdi-close-circle" variant="solo" clearable
                        label="Message" hide-details="auto" type="text" @click:append="valid = !valid"></v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-btn icon="mdi-magnify" size="large" @click="refresh()">
                    </v-btn>
                </v-col>
            </v-row>

            <v-container class="pa-4 text-center">
                <v-row class="fill-height" align="center" justify="center">
                    <template v-for="(card, i) in data.results" :key="i">
                        <v-col :cols="flex" md="3">

                            <v-hover v-slot="{ isHovering, props }">
                                <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }"
                                    v-bind="props">
                                    <v-img :src="`${IMAGE_BASE_URL}${card.poster_path}`" height="235px" cover>
                                        <v-card-title class="text-h6 text-white d-flex flex-column">
                                            <p class="mt-4">
                                                {{ card.name }}
                                            </p>

                                            <div>
                                                <p class="ma-0 text-body-1 font-weight-bold">
                                                    {{ card.vote_average }}
                                                </p>
                                                <!-- <p class="text-caption font-weight-medium">
                                            {{ card.subtext }}
                                        </p> -->
                                            </div>
                                        </v-card-title>
                                        <div class="align-self-center">
                                            <v-btn v-for="(icon, index) in icons" :key="index" variant="text"
                                                :class="{ 'show-btns': isHovering }" :color="'rgba(255, 255, 255, 0)'"
                                                :icon="icon"></v-btn>
                                        </div>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-container>
    </v-form>

</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'
const flex = 3;
const icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'];
const valid = ref(true);
const search = ref('dexter');

const { API_BASE_URL, IMAGE_BASE_URL } = useRuntimeConfig()
// const { data, pending, refresh } = await useAsyncData(() => $fetch(`${API_BASE_URL}&query=${search.value}`) as Promise<Data>, { watch: [search] })
const { data, pending, refresh } = await useAsyncData(() => getFilteredResults as Promise<Data>, { watch: [search] })


const getFilteredResults = () => $fetch(`${API_BASE_URL}&query=${search.value}`)

const debouncedFilter = debounce(getFilteredResults, 250) // 250ms delay

watch(() => search.value, debouncedFilter) 
</script>

<style scoped>
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>