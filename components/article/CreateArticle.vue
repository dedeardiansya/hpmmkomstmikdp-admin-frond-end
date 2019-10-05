<template>
  <div>
    <b-button v-b-modal.modal-1 variant="secondary" block size="lg"
      >CREATE ARTICLE</b-button
    >
    <b-modal id="modal-1" hide-footer title="Create Article">
      <b-form @submit="onSubmit">
        <b-form-input
          v-model="form.title"
          type="text"
          class="mb-4 mt-2"
          placeholder="Title"
        />
        <b-button type="submit" variant="primary">{{
          loading ? 'Loading' : 'Create'
        }}</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: ''
      },
      loading: false
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.createArticle(this.form.title)
    },
    async createArticle(title) {
      const token = this.$cookies.get('auth_token')
      if (!token) return null
      this.loading = true

      const options = { headers: { authorization: 'bearer ' + token } }

      try {
        const res = await this.$axios.$post('/article', { title }, options)
        this.$router.push(`/article/${res.slug}`)
        this.$toast.success(res.message)
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
