<template>
  <div class="container bg-white shadow-sm">
    <div class="py-3">
      <b-form @submit="onSubmit">
        <b-form-group label="Title:">
          <b-form-input
            v-model="article.title"
            type="text"
            placeholder="Title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Heading:">
          <b-form-input
            v-model="article.heading"
            type="text"
            placeholder="Heading"
          ></b-form-input>
        </b-form-group>
        <client-only>
          <b-form-group label="Created at:">
            <datepicker
              v-model="article.createdAt"
              type="date"
              input-class="form-control"
              calendar-class="card"
              placeholder="Created at"
            />
          </b-form-group>
        </client-only>
        <b-form-group label="Description:">
          <b-form-textarea
            v-model="article.description"
            type="text"
            placeholder="Description"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group label="Body:">
          <app-quill v-model="article.body" />
        </b-form-group>
        <b-button type="submit" variant="primary">{{
          loading ? 'Loading' : 'Save'
        }}</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import AppQuill from '@/components/AppQuill'
export default {
  layout: 'app',
  middleware: 'isLogin',
  components: {
    AppQuill
  },
  data() {
    return {
      loading: false
    }
  },
  async asyncData({ params, error, $axios }) {
    try {
      const { article } = await $axios.$get(`/article/${params.slug}`)
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.editArticle(this.article)
    },
    async editArticle(article) {
      const token = this.$cookies.get('auth_token')
      if (!token) return null
      this.loading = true

      try {
        const response = await this.$axios.$put(
          '/article/' + this.$route.params.slug,
          article,
          {
            headers: { authorization: 'bearer ' + token }
          }
        )
        this.$router.push(`/article/${response.article.slug}`)
        this.$toast.success(response.message)
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
