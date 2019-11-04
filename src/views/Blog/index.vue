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
                <a class="nav-link active" href="#">Semua</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Design</a></li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pemrograman</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jaringan</a>
              </li>
            </ul>
          </div>
          <create-blog-modal class="kt-portlet__head-toolbar" />
        </div>
        <search-blog></search-blog>
        <blog-lists></blog-lists>
      </div>
    </div>
  </div>
</template>
<script>
import CreateBlogModal from './components/CreateBlogModal'
import BlogLists from './components/BlogLists'
import SearchBlog from './components/SearchBlog'
export default {
  components: {
    CreateBlogModal,
    BlogLists,
    SearchBlog
  }
}
</script>
