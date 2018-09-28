<template>
<v-app>
  <sidebar />
  <navbar />
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '~/plugins/axios'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  el: '#app',

  components: {
    Navbar,
    Sidebar
  },

  metaInfo () {
    return {
      title: this.appName,
      titleTemplate (value) {
        if (!value || value === this.appName) {
          return value
        } else {
          return `${value} - ${this.appName}`
        }
      }
    }
  },

  computed: mapGetters({
    appName: 'global/appName',
    locale: 'global/locale',
    locales: 'global/locales'
  }),

  async beforeCreate () {
    await this.$store.dispatch('global/initLocale')
  },
}
</script>
