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

        <div class="kt-portlet__body">
          <div class="kt-portlet" v-for="i in 5" :key="i">
            <div class="kt-portlet__body kt-ribbon">
              <div
                class="kt-ribbon__target p-2 shadow-sm bg-white text-primary rounded font-weight-bold"
                style="top: 10px; left: 10px;"
              >
                PUBLIC
              </div>
              <div class="kt-portlet__content">
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <img src="@/assets/img/placeholder.svg" alt="" />
                  </div>
                  <div class="col-md-9 mb-3">
                    <h3>Ini artickel pertama</h3>
                    <p class="font-weight-bold">
                      <span class="text-primary">Jaringan</span> - by
                      <span class="text-primary">Admin</span>, 19 September 2019
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis corrupti non iure vitae aliquam, ipsam neque
                      facere consequatur et repellendus deserunt ipsum eaque
                      quis quas ad nihil aliquid nostrum eos!
                    </p>
                    <button class="btn btn-sm btn-label-primary">
                      MAKE PUBLIC</button
                    >&nbsp;
                    <button class="btn btn-sm btn-label-info">EDIT</button
                    >&nbsp;
                    <button class="btn btn-sm btn-label-danger">DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import createBlogModal from './components/CreateBlogModal'
export default {
  components: {
    createBlogModal
  }
}
</script>
