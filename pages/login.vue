<template>
  <div :style="'background-image: url(' + Background + ')'" class="login-page">
    <div class="container m-auto">
      <div class="row">
        <div class="col-md-5 m-auto">
          <BlockUI :loading="loading" class="kt-portlet">
            <div class="kt-portlet__body">
              <div class="kt-portlet__section text-center">
                <img
                  class="logo d-blok mb-3"
                  src="@/assets/img/logo.png"
                  alt="Logo hpmm"
                />
                <h3 class="title mb-5 font-weight-bold">Sign in To Admin</h3>
                <button
                  @click.prevent="signIn"
                  type="button"
                  class="btn btn-light btn-elevate"
                >
                  <svg-icon-google />
                  Sign in with Google
                </button>
                <div
                  v-if="error"
                  class="alert alert-solid-danger alert-bold text-center mt-3"
                >
                  <div class="alert-text">{{ error }}</div>
                </div>
              </div>
            </div>
          </BlockUI>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockUI from '@/components/elements/BlockUI'
import Background from '@/assets/img/background-3.jpg'
export default {
  middleware: 'guest',
  components: {
    BlockUI
  },
  data() {
    return {
      Background,
      loading: false,
      error: ''
    }
  },
  methods: {
    signIn() {
      this.loading = true
      this.$store
        .dispatch('auth/SIGN_IN_WITH_GOOGLE')
        .then(async () => {
          try {
            await this.$store.dispatch('anggota/FETCH_ANGGOTA')
          } catch (e) {}
          this.$router.push('/')
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          this.error = e.message
        })
    }
  }
}
</script>
