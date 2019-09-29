<template>
  <div class="app-layout">
    <app-navbar />
    <div class="p-2" />
    <nuxt />
  </div>
</template>
<script>
import AppNavbar from '~/components/layouts/AppNavbar'
export default {
  components: {
    AppNavbar
  }
}
</script>
