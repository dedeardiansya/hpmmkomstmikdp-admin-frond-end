<template>
  <div class="container bg-white shadow-sm">
    <div class="py-3">
      <create-article />
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
  }
}
</script>
