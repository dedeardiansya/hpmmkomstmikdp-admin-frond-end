<template>
  <div class="container py-3">
    <b-card header="LOGIN" header-tag="header">
      <b-alert v-if="error" show variant="danger">{{ error.message }}</b-alert>
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Email">
          <b-form-input v-model="form.email" type="text" trim></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input v-model="form.password" type="text" trim></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="loading">{{
          loading ? 'LOADING' : 'LOGIN'
        }}</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGIN } from '../store/action.types'
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['loading', 'error', 'auth'])
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(LOGIN, this.form)
    }
  },
  watch: {
    auth: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val) this.$router.push('/')
      }
    }
  }
}
</script>
