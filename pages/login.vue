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

      <b-button type="submit" variant="primary">Login</b-button>
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
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
