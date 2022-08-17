<template>

  <v-app>
    <v-layout>
      <v-app-bar app flat color="grey-lighten-5">
        <v-container class="py-0 fill-height d-flex justify-start align-center">
          <div class="text-xs-h7 text-md-h6 text-lg-h5 mr-3">My Series</div>
          <v-btn>Teste</v-btn>
        </v-container>
      </v-app-bar>
      <v-main>
        <v-container>
          <Search></Search>
          <slot></slot>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<!-- <template>
  <v-layout>
    <v-app-bar>
      <v-container>
      <v-app-bar-title>My Series</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" class="d-flex">
            <v-text-field v-model="search" clear-icon="mdi-close-circle" variant="solo" clearable label="Message"
              hide-details="auto" type="text" @click:append="valid = !valid" @keydown.enter.prevent=""></v-text-field>
            <v-btn size="x-large" class="ml-2 align-self-auto" @click="">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const valid = ref(true);
const search = ref('dexter');

</script>

<style scoped>
.v-btn {
  height: 56px;
  min-height: 56px;
}
</style> -->