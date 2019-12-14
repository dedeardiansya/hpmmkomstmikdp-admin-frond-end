<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="kt-portlet kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">Edit Blog</h3>
          </div>
        </div>
        <div class="kt-portlet__body">
          <update-hero
            :id="blog.id"
            :hero="blog.hero"
            @hero-updated="updateHero"
            class="kt-portlet__content"
          ></update-hero>
        </div>
        <div class="kt-portlet__body">
          <div class="kt-portlet__content">
            <div class="form-group">
              <label>Title</label
              ><input
                v-model="blog.title"
                type="text"
                placeholder="Title"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Author</label
              ><input
                v-model="blog.author"
                type="text"
                placeholder="Author"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Category</label>
              <select
                v-model="blog.category"
                class="form-control form-control-select"
              >
                <option
                  v-for="category in categories"
                  :key="category"
                  :value="category"
                  >{{ category }}</option
                >
              </select>
            </div>
            <div class="form-group">
              <label>Heading</label
              ><input
                v-model="blog.heading"
                type="text"
                placeholder="Heading"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>CreatedAt</label
              ><input
                v-model="blog.createdAt"
                type="date"
                placeholder="CreatedAt"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Description</label
              ><textarea
                v-model="blog.description"
                placeholder="Description"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Body</label>
              <froala-editor v-model="blog.body"></froala-editor>
            </div>
            <div class="form-group">
              <button
                :class="
                  loading
                    ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                    : ''
                "
                :disabled="loading"
                @click="updateBlog"
                class="btn btn-label-primary btn-wide"
              >
                SIMPAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FroalaEditor from '~/components/elements/FroalaEditor'
import UpdateHero from '~/components/collections/blog/AppUpdateHero'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    UpdateHero,
    FroalaEditor
  },
  data() {
    return {
      loading: false,
      error: ''
    }
  },
  computed: {
    categories() {
      return this.$store.getters.config.BLOG_CATEGORIES
    }
  },
  async asyncData({ params, error, $axios, store }) {
    try {
      const authToken =
        'Bearer ' + (await store.getters['auth/currentUser'].getIdToken(true))
      $axios.setToken(authToken)
      const blog = (await $axios.$get('/admin/blog/' + params.id)).blog
      return { blog }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  methods: {
    updateHero(hero) {
      this.$set(this.blog, 'hero', hero)
    },
    async updateBlog() {
      this.loading = true
      this.error = ''
      try {
        await this.$store.dispatch('blog/UPDATE_BLOG', this.blog)
        this.$swal({
          text: 'Blog telah di update.',
          icon: 'success'
        })
      } catch (e) {
        this.error = e.message
        this.$swal({
          text: e.message,
          icon: 'error'
        })
      }
      this.loading = false
    }
  }
}
</script>
