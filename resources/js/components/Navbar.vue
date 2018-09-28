<template>
<v-toolbar app dense clipped-left flat>
  <v-toolbar-side-icon @click.native="$store.dispatch('global/sidebarToggle')" />

  <router-link :to="{name:'home',params:{lang:locale}}" class="title" exact>{{appName}}</router-link>

</v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',

  computed: mapGetters({
    appName: 'global/appName',
    locale: 'global/locale',
  }),
}
</script>
