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

        <div class="kt-portlet__body pb-0">
          <div class="kt-portlet m-0 bg-light">
            <div class="kt-portlet__body p-0">
              <div class="kt-portlet__content">
                <div class="kt-input-icon kt-input-icon--right">
                  <input
                    type="text"
                    class="form-control form-control-lg bg-transparent border-0"
                    placeholder="Search..."
                  />
                  <span class="kt-input-icon__icon kt-input-icon__icon--right">
                    <span><i class="simple-icon-magnifier"></i></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <blog-lists></blog-lists>
      </div>
    </div>
  </div>
</template>
<script>
import createBlogModal from './components/CreateBlogModal'
import blogLists from './components/BlogLists'
export default {
  components: {
    createBlogModal,
    blogLists
  }
}
</script>
