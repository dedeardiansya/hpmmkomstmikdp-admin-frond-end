<template>
  <div class="kt-portlet__body">
    <blog-list v-for="blog in blogs" :key="blog.id" :blog="blog" />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
    ></infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
import BlogList from './AppBlogList'
export default {
  components: {
    InfiniteLoading,
    BlogList
  },
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      infiniteId: +new Date(),
      blogs: [],
      authToken: ''
    }
  },
  watch: {
    category: {
      handler() {
        this.blogs = []
        this.infiniteId += 1
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.authToken)
        this.authToken = await this.$store.getters.profile.getIdToken(true)
      const url = `/admin/blog?limit=4&offset=${this.blogs.length}&category=${this.category}`
      this.$axios.setToken(this.authToken, 'Bearer')
      this.$axios
        .$get(url)
        .then(data => {
          this.blogs = [...this.blogs, ...data.blogs]
          if (data.blogs.length) $state.loaded()
          else $state.complete()
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
