<template>
<v-navigation-drawer
  app
  v-model="drawer"
  fixed
  clipped
>
  <v-toolbar flat dense>
    <v-toolbar-title>{{ $t('Menu') }}</v-toolbar-title>
    <v-spacer />
    <v-btn flat icon ml-auto @click.native="$store.dispatch('global/sidebarToggle')"><v-icon>clear</v-icon></v-btn>
  </v-toolbar>

  <v-list dense>

    <v-list-tile>
      <v-list-tile-content>
        <locale-dropdown />
      </v-list-tile-content>
    </v-list-tile>

    <v-divider dark class="my-3" />

    <v-list-tile :to="{name:'home',params:{lang:locale}}" light exact>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        {{ $t('Home') }}
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  name: 'sidebar',

  components: {
    LocaleDropdown
  },

  data () {
    return {
      drawer: false,
    }
  },

  computed: mapGetters({
    locale: 'global/locale',
    sidebarActive: 'global/sidebarActive',
  }),

  watch: {
    sidebarActive(to) {
      this.drawer = to
    }
  },
}
</script>
