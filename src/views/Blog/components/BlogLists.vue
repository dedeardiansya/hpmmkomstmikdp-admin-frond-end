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
import BlogList from './BlogList'
import blogService from '@/services/blog'
export default {
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      blogs: [],
      infiniteId: +new Date()
    }
  },
  components: {
    InfiniteLoading,
    BlogList
  },
  methods: {
    infiniteHandler($state) {
      blogService
        .fetchBlogs({ category: this.category, offset: this.blogs.length })
        .then(blogs => {
          if (blogs) {
            this.blogs.push(...blogs)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch(e => {
          console.log(e)
        })
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
  }
}
</script>
