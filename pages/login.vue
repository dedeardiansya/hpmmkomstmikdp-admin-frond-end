<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-input
        v-model="form.email"
        type="email"
        placeholder="Alamat Email"
        class="mb-4 mt-2"
      />
      <b-form-input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="mb-4 mt-2"
      />

      <b-button type="submit" variant="primary">{{
        loading ? 'Loading' : 'Login'
      }}</b-button>
      <router-link to="/register" class="btn btn-secondary"
        >Register</router-link
      >
    </b-form>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.login(this.form)
    },
    async login(data) {
      this.loading = true
      try {
        const req = await this.$axios.post('/user/login', data)
        this.$router.push('/')
        this.$cookies.set('auth_token', req.data.data.token, {
          maxAge: 60 * 60 * 24 * 7
        })
        this.$toast.success(req.data.message)
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
