<template>
  <div class="container bg-white shadow-sm">
    <div class="py-3">
      <edit-article :article="article" />
    </div>
  </div>
</template>
<script>
import EditArticle from '@/components/article/EditArticle'
export default {
  layout: 'app',
  middleware: 'isLogin',
  components: {
    EditArticle
  },
  async asyncData({ params, error, $axios, app }) {
    const token = app.$cookies.get('auth_token')
    if (!token) return error({ statusCode: 404 })
    const options = {
      headers: { authorization: 'bearer ' + token }
    }
    try {
      const { article } = await $axios.$get(`/article/${params.slug}`, options)
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  }
}
</script>
