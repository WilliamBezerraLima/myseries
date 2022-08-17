<template>
<v-btn @click="refresh()">Refresh</v-btn>
    <v-form>
        <v-container class="text-center">

            <!-- <v-row align="center" justify="center">
                <v-col cols="12" class="d-flex">
                    <v-text-field v-model="search" clear-icon="mdi-close-circle" variant="solo" clearable
                        label="Message" hide-details="auto" type="text" @click:append="valid = !valid"
                        @keydown.enter.prevent="refresh()"></v-text-field>
                    <v-btn size="x-large" class="ml-2 align-self-auto" @click="refresh()">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-col>
            </v-row> -->


            <!-- <v-container class=" px-0"> -->
                <v-row class="fill-height text-center" align="center" justify="center">
                    <template v-for="(card, i) in data?.results" :key="i">
                        <v-col :cols="flex" md="2">

                            <v-hover v-slot="{ isHovering, props }">
                                <v-card :elevation="isHovering ? 12 : 2" class="d-flex"
                                    :class="{ 'on-hover': !isHovering }" v-bind="props">
                                    <v-img lazy-src="https://picsum.photos/id/11/100/60"
                                        :src="`${IMAGE_BASE_URL}${card.poster_path}`" height="265px" cover>

                                        <template v-slot:placeholder v-if="card.poster_path">
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5">
                                                </v-progress-circular>
                                            </v-row>
                                        </template>

                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-btn rounded="pill" :flat="!isHovering"
                                                :color="isHovering ? 'primary' : 'rgba(255, 255, 255, 0)'"
                                                :class="{ 'show-btns': isHovering }"
                                                :href="`/${card.id}`"
                                                target="_blank">
                                                {{ isHovering ? 'Assistir' : '' }}
                                                <v-icon end :color="isHovering ? 'white' : 'rgba(255, 255, 255, 0)'">mdi-play</v-icon>
                                            </v-btn>
                                        </div>

                                        <v-card-title class="text-h6 text-white d-flex flex-column">
                                            <!-- <p class="mt-4 font-weight-black">
                                                {{ card.name }}
                                            </p>

                                            <div>
                                                <p class="ma-0 text-body-1 font-weight-bold">
                                                   <v-icon>mdi-star-outline</v-icon> {{ card.vote_average }}
                                                </p>
                                            </div> -->
                                        </v-card-title>
                                        <!-- <div class="align-self-center">
                                            <v-btn rounded="pill"
                                                :color="isHovering ? 'primary' : 'rgba(255, 255, 255, 0)'"
                                                :class="{ 'show-btns': isHovering }">
                                                {{ isHovering ? 'Assistir' : '' }}
                                            </v-btn>
                                        </div> -->
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </template>
                </v-row>
            <!-- </v-container> -->
        </v-container>
    </v-form>

</template>

<script setup lang="ts">
const flex = 1;
const icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'];
const valid = ref(true);
const search = ref('dexter');

const { API_BASE_URL, IMAGE_BASE_URL } = useRuntimeConfig()
const { data, pending, refresh } = await useAsyncData('results', () => $fetch(`${API_BASE_URL}&query=${search.value}`) as Promise<Data>)

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