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
  data() {
    return {
      infiniteId: +new Date()
    }
  },
  computed: {
    category() {
      return this.$store.getters['blog/category']
    },
    blogs() {
      return this.$store.getters['blog/blogs']
    }
  },
  watch: {
    category: {
      handler() {
        this.infiniteId += 1
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$store
        .dispatch('blog/FETCH_BLOGS', {
          offset: this.blogs.length
        })
        .then(complete => {
          if (complete) {
            $state.complete()
          } else {
            $state.loaded()
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
