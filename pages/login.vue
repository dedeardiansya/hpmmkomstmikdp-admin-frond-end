<template>
  <form>
    <base-input
      v-model="form.email"
      class="input-group-alternative mb-3"
      placeholder="Email"
      addon-left-icon="ni ni-email-83"
    >
    </base-input>
    <base-input
      v-model="form.password"
      class="input-group-alternative"
      placeholder="Password"
      type="password"
      addon-left-icon="ni ni-lock-circle-open"
    >
    </base-input>
    <div class="text-center">
      <base-button type="primary" block :disabled="loading" @click="onSubmit">{{
        btnText
      }}</base-button>
      <hr />
      <router-link to="/register" class="text-primary"
        ><small>Create new account</small></router-link
      >
    </div>
  </form>
</template>
<script>
export default {
  layout: 'auth',
  middleware: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  computed: {
    btnText() {
      return this.loading ? 'Loading' : 'Sign in'
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      this.loading = true
      try {
        const req = await this.$axios.$post('/auth/login', this.form)
        this.$router.push('/')
        this.$cookies.set('auth_token', req.token, {
          maxAge: 60 * 60 * 24 * 7
        })
        this.$toast.success(req.message)
      } catch (e) {
        let mess
        if (e.response) {
          mess = e.response.data.message
        } else {
          mess = e.message
        }
        this.$toast.danger(mess)
      }
      this.loading = false
    }
  }
}
</script>
