<template>
  <div class="layout">
    <aside class="layout-aside"><app-aside /></aside>
    <div class="layout-wrapper bg-light">
      <header class="layout-header"><app-navbar /></header>
      <main class="layout-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'
import AppAside from './components/AppAside'
export default {
  components: {
    AppNavbar,
    AppAside
  }
}
</script>

<style lang="scss" scoped>
.layout-aside {
  position: absolute;
  width: 250px;
}
.layout-wrapper {
  min-height: 100vh;
  padding-left: 250px;
}
</style>
