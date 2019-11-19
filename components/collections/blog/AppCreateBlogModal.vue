<template>
  <div>
    <button class="btn btn-primary btn-wide" @click="showModal">
      Buat blog baru
    </button>
    <b-modal
      id="create-blog-modal"
      hide-footer
      hide-header
      no-close-on-backdrop
      body-class="p-0 bg-light"
    >
      <div class="position-relative overflow-hidden">
        <div class="px-3 py-5 bg-white">
          <h3 class="text-center m-0">Buat Blog baru</h3>
        </div>
        <div
          v-if="error"
          class="alert alert-solid-danger alert-bold rounded-0 p-3"
        >
          <div class="alert-text text-center m-0">{{ error }}</div>
        </div>
        <div class="p-3">
          <div class="py-3">
            <label for="title">Blog Title</label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="py-3">
            <label for="category">Blog Category</label>
            <select id="category" v-model="form.category" class="form-control">
              <option disabled selected>Category</option>
              <option
                v-for="category in $store.getters.config.BLOG_CATEGORIES"
                :key="category"
                :value="category"
                >{{ category }}</option
              >
            </select>
          </div>
          <hr />
          <div class="py-3">
            <button
              class="btn btn-label-primary mr-1"
              :class="
                loading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="loading"
              @click="createBlog(form)"
            >
              Tambah
            </button>
            <button
              class="btn btn-label-danger"
              :disabled="loading"
              @click="hideModal"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        title: '',
        category: ''
      },
      error: ''
    }
  },
  methods: {
    hideModal() {
      this.$bvModal.hide('create-blog-modal')
    },
    showModal() {
      this.$bvModal.show('create-blog-modal')
    },
    resetModal() {
      this.$set(this.form, 'title', '')
      this.$set(this.form, 'category', '')
      this.hideModal()
    },
    async createBlog(data) {
      this.loading = true
      this.error = ''
      try {
        const { blog } = await this.$store.dispatch('CREATE_BLOG', data)
        this.resetModal()
        console.log(blog)
      } catch (e) {
        this.error = e.message
      }
      this.loading = false
    }
  }
}
</script>
