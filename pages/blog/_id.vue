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
            class="kt-portlet__content"
            :hero="blog.hero"
            @hero-updated="updateHero"
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
                class="btn btn-label-primary btn-wide"
                @click="updateBlog"
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
import { getDate, formatDate } from '@/utils'
export default {
  layout: 'app',
  middleware: 'auth',
  components: {
    UpdateHero,
    FroalaEditor
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
      blog.createdAt = formatDate(getDate(blog.createdAt))
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
      try {
        await this.$store.dispatch('blog/UPDATE_BLOG', this.blog)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
