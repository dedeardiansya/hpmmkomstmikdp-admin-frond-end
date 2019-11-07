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
import { FETCH_BLOGS } from '@/store/actions.type'
export default {
  computed: {
    category() {
      return this.$store.getters.blogCategory
    },
    blogs() {
      return this.$store.getters.blogs
    }
  },
  data() {
    return {
      infiniteId: +new Date()
    }
  },
  components: {
    InfiniteLoading,
    BlogList
  },
  methods: {
    infiniteHandler($state) {
      this.$store
        .dispatch(FETCH_BLOGS, {
          category: this.category,
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
  },
  watch: {
    category: {
      handler() {
        this.infiniteId += 1
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
