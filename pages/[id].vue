<!-- <template>
  <p>{{ $route.params.id }}</p>
</template> -->

<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="2">
                <v-sheet rounded="lg" min-height="268">
                    <!--  -->
                    <v-img lazy-src="https://picsum.photos/id/11/100/60" :src="`${IMAGE_BASE_URL}${data.poster_path}`"
                        height="265px" cover>

                        <template v-slot:placeholder v-if="data.poster_path">
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="8">
                <v-sheet min-height="70vh" rounded="lg">
                    <!--  -->
                    Center
                    <pre>{{ JSON.stringify(data, null, 4) }}</pre>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="2">
                <v-sheet rounded="lg" min-height="268">
                    <!--  -->
                    Right
                    <v-btn @click="refresh()">Refresh</v-btn>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ReturnVideo } from '../models/returnvideo'
const route = useRoute()
const { VIDEO_BASE_URL, IMAGE_BASE_URL } = useRuntimeConfig()
const {
    data, pending, refresh
} = await useAsyncData('details', () => $fetch(`${VIDEO_BASE_URL.replace('XXX', String(route.params.id))}`) as Promise<ReturnVideo>)
</script>