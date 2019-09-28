<template>
  <div class="auth-layout" :style="'background-image: url(' + Background + ')'">
    <div class="m-auto layout-wrap p-4 bg-white">
      <header class="text-center">
        <img :src="Logo" class="d-block m-auto" />
        <p>ADMIN HPMMKOMSTMIKDP</p>
      </header>
      <hr />
      <nuxt />
    </div>
  </div>
</template>
<script>
import Logo from '~/assets/img/logo.png'
import Background from '~/assets/img/background.jpg'
export default {
  data() {
    return {
      Logo,
      Background
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-layout {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.layout-wrap {
  min-width: 400px;
}
</style>
