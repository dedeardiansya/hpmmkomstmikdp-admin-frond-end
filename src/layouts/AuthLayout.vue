<template>
  <div class="auth-layout bg-light">
    <header class="py-4 text-center bg-white shadow-sm">
      <router-link to="/">
        <img :src="Logo" alt="Logo hpmm" height="50px" />
      </router-link>
    </header>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="bg-white shadow-sm p-3">
            <h3 class="text-center py-3">
              <slot name="heading">AUTH LAYOUT</slot>
            </h3>
            <hr />
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '@/assets/img/logo.png'
export default {
  data() {
    return {
      Logo
    }
  }
}
</script>

<style>
  .auth-layout {
    min-height: 100vh;
  }
</style>
