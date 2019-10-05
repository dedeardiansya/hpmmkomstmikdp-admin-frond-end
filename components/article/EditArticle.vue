<template>
  <b-form @submit="onSubmit">
    <b-form-group label="Title:">
      <b-form-input
        v-model="article.title"
        type="text"
        placeholder="Title"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Author:">
      <b-form-input
        v-model="article.author"
        type="text"
        placeholder="Author"
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
</template>
<script>
import AppQuill from '@/components/AppQuill'
export default {
  components: {
    AppQuill
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false
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
      const apiUrl = '/article/' + this.$route.params.slug
      const options = {
        headers: { authorization: 'bearer ' + token }
      }
      try {
        const res = await this.$axios.$put(apiUrl, article, options)
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
