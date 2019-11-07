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
                  @click.prevent="category = ''"
                  href="#"
                  >Semua</a
                >
              </li>
              <li
                class="nav-item"
                v-for="(item, i) in $store.getters.config.BLOG_CATEGORIES"
                :key="i"
              >
                <a
                  class="nav-link"
                  :class="category == item ? 'active' : ''"
                  href="#"
                  @click.prevent="category = item"
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
import CreateBlogModal from './components/CreateBlogModal'
import BlogLists from './components/BlogLists'
import SearchBlog from './components/SearchBlog'
export default {
  data() {
    return {
      category: ''
    }
  },
  components: {
    CreateBlogModal,
    BlogLists,
    SearchBlog
  }
}
</script>
