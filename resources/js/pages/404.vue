<template>
  <v-card class="text-center">
    <h3 class="mb-4">{{ $t('Page Not Found') }}</h3>

    <div class="links">
      <router-link :to="{ name: 'home' }">
        {{ $t('Back to Home') }}
      </router-link>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
