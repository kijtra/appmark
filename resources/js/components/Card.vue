<template>
<v-card height="100%">
  <v-card-text>
    <v-layout row nowrap>
      <v-flex xs3>
        <v-img
          :src="data.artworkUrl100"
          :lazy-src="data.artworkUrl512"
          aspect-ratio="1"
          contain
        />
      </v-flex>
      <v-flex xs9>
        <p>{{data.trackName}}</p>
      </v-flex>
    </v-layout>
  </v-card-text>
</v-card>
</template>
<script>
export default {
  name: 'appcard',
  props: ['data']
}
</script>
