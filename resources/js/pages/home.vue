<template>
<v-container fluid>
  {{$t('Home')}}
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import db from '~/plugins/db'

export default {

  data() {
    return {
    }
  },

  computed: mapGetters({
  }),

  watch: {

    immediate: true
  },

  mounted () {
  },

  methods: {
  }
}
</script>
