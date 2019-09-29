<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-input
        v-model="form.name"
        type="text"
        placeholder="Nama"
        class="mb-4 mt-2"
      />
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
        loading ? 'Loading' : 'Register'
      }}</b-button>
      <router-link to="/login" class="btn btn-secondary">Login</router-link>
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
        password: '',
        name: ''
      },
      loading: false
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.register(this.form)
    },
    async register(data) {
      this.loading = true
      try {
        const req = await this.$axios.post('/user/register', data)
        console.log(req)
      } catch (e) {
        console.log(e.response.data)
      }
      this.loading = false
    }
  }
}
</script>
