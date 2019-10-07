<template>
  <form>
    <base-input
      v-model="form.name"
      class="input-group-alternative mb-3"
      placeholder="Name"
      addon-left-icon="ni ni-circle-08"
    />
    <base-input
      v-model="form.email"
      class="input-group-alternative mb-3"
      placeholder="Email"
      addon-left-icon="ni ni-email-83"
    />
    <base-input
      v-model="form.password"
      class="input-group-alternative"
      placeholder="Password"
      type="password"
      addon-left-icon="ni ni-lock-circle-open"
    />
    <div class="text-center">
      <base-button type="primary" block :disabled="loading" @click="onSubmit">{{
        btnText
      }}</base-button>
      <hr />
      <router-link to="/login" class="text-primary"
        ><small>Login into your account</small></router-link
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
        name: '',
        email: '',
        password: ''
      },
      loading: false
    }
  },
  computed: {
    btnText() {
      return this.loading ? 'Loading' : 'Sign up'
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      this.loading = true
      try {
        const req = await this.$axios.$post('/auth/register', this.form)
        this.$router.push('/login')
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
