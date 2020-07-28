<template>
  <div class="default-layout">
    <app-navbar></app-navbar>
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './AppNavbar'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss">
body {
  padding-left: 80px;
  @include media-breakpoint-down(md) {
    padding-left: 0;
    padding-top: 80px;
  }
}

.default-layout {
  background-color: $gray-200;
  min-height: 100vh;
  @include media-breakpoint-down(md) {
    min-height: calc(100vh - 80px);
    padding-left: 0;
    padding-top: 80px;
  }
}
</style>
