<template>
  <div class="container bg-white shadow-sm">
    <div class="py-3">
      <create-article />
      <div v-for="article in articles.docs" :key="article.slug">
        <div>
          <router-link :to="'/article/' + article.slug">
            {{ article.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CreateArticle from '~/components/article/CreateArticle'
export default {
  layout: 'app',
  middleware: 'isLogin',
  components: {
    CreateArticle
  },
  async asyncData({ $axios, error, app }) {
    const token = app.$cookies.get('auth_token')
    const options = {
      headers: { authorization: 'bearer ' + token }
    }
    try {
      const articles = await $axios.$get('/admin/article?limit=20', options)
      return articles
    } catch (e) {
      let message
      let statusCode
      if (e.response) {
        statusCode = e.response.data.status
        message = e.response.data.message
      } else {
        statusCode = 503
        message = e.message
      }
      error({ message, statusCode })
    }
  }
}
</script>
