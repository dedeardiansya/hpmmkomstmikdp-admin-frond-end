<template>
  <div class="auth-layout" :style="'background-image: url(' + Background + ')'">
    <div class="container py-5">
      <div class="row justify-content-center mb-3">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary shadow border-0">
            <div class="card-body px-lg-5 py-lg-5">
              <header class="text-center">
                <img :src="Logo" class="d-block m-auto" />
                <p>ADMIN HPMMKOMSTMIKDP</p>
              </header>
              <hr />
              <slide-y-up-transition mode="out-in" origin="center top">
                <nuxt />
              </slide-y-up-transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions'
import Logo from '~/assets/img/logo.png'
import Background from '~/assets/img/background.jpg'
export default {
  components: {
    SlideYUpTransition
  },
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
</style>
