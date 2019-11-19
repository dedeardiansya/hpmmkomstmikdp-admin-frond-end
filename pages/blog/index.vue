<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-toolbar">
            <ul
              class="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="category ? '' : 'active'"
                  href="#"
                  @click.prevent="setCategory('')"
                  >Semua</a
                >
              </li>
              <li v-for="(item, i) in categories" :key="i" class="nav-item">
                <a
                  class="nav-link"
                  :class="category == item ? 'active' : ''"
                  href="#"
                  @click.prevent="setCategory(item)"
                  >{{ item }}</a
                >
              </li>
            </ul>
          </div>
          <create-blog-modal class="kt-portlet__head-toolbar" />
        </div>
        <search-blog></search-blog>
        <blog-lists :category="category"></blog-lists>
      </div>
    </div>
  </div>
</template>
<script>
import CreateBlogModal from '~/components/collections/blog/AppCreateBlogModal'
import BlogLists from '~/components/collections/blog/AppBlogLists'
import SearchBlog from '~/components/collections/blog/AppSearchBlog'
export default {
  middleware: 'auth',
  layout: 'app',
  components: {
    CreateBlogModal,
    BlogLists,
    SearchBlog
  },
  data() {
    return {
      category: ''
    }
  },
  computed: {
    categories() {
      return this.$store.getters.config.BLOG_CATEGORIES
    }
  },
  methods: {
    setCategory(category) {
      this.category = category
    }
  }
}
</script>
