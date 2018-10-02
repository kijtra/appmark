<template>
<v-container fluid>
  <v-layout column wrap align-center justify-center>
    <v-flex xs12>
      <div class="logo-font display-4">appmark</div>
    </v-flex>
    <v-flex xs12>
      <v-form ref="searchForm" @submit.prevent="search">
        <v-text-field
          v-model="form.term"
          outline
          full-width
          :label="this.$t('Search App')"
          prepend-inner-icon="search"
          :append-icon="loading ? 'update' : ''"
          :clearable="!loading"
          :disabled="!!loading"
          required
          :error="!!searchError"
          :error-messages="searchError"
          ref="searchWord"
        ></v-text-field>
      </v-form>
    </v-flex>
  </v-layout>
  <v-container grid-list-lg fluid>
    <v-layout row wrap fill-height>
      <v-flex
        v-for="(item, i) in items"
        :key="i"
        xs6
        sm4
        md3
        mb-1
      >
        <appcard :data="item"></appcard>
      </v-flex>
    </v-layout>
  </v-container>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import db from '~/plugins/db'

export default {

  data() {
    return {
      form: {
        term: ''
      },
      searchError: '',
      loading: false,
      items: []
    }
  },

  computed: mapGetters({
  }),

  watch: {

    immediate: true
  },

  created () {
    if (this.$route.query.q) {
      this.form.term = this.$route.query.q
      this.search()
    }
  },

  methods: {
    search(e) {
      this.searchError = ''

      if (this.form.term) {
        this.loading = true
        this.$itunes.search(this.form).then(res => {
          console.log(res.data)
          this.items = res.data.results
        }).catch(e => {
          this.searchError = e.message
          throw e
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.searchError = this.$t('Keyword is required')
        this.$refs.searchWord.$el.focus()
      }
    }
  }
}
</script>
