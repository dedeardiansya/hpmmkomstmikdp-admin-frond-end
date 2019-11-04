<template>
  <div class="login-page" :style="'background-image: url(' + Background + ')'">
    <div class="container m-auto">
      <div class="row">
        <div class="col-md-5 m-auto">
          <div class="kt-portlet position-relative overflow-hidden">
            <BlockUI v-if="loading">
              <b-spinner variant="primary"></b-spinner>
            </BlockUI>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from '@/assets/img/background-3.jpg'
import { SIGN_IN_WITH_GOOGLE } from '../store/actions.type'
export default {
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
        .dispatch(SIGN_IN_WITH_GOOGLE)
        .then(() => {
          this.loading = false
          this.$router.push('/dashboard')
        })
        .catch(e => {
          this.loading = false
          this.error = e.message
        })
    }
  }
}
</script>
