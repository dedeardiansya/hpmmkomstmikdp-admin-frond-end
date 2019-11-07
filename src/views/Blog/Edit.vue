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
            class="kt-portlet__content"
            :id="blog.id"
            :hero="blog.hero"
            @hero-updated="updateHero"
          ></update-hero>
        </div>
        <div class="kt-portlet__body">
          <div class="kt-portlet__content">
            <div class="form-group">
              <label>Title</label
              ><input type="text" placeholder="Title" class="form-control" v-model="blog.title" />
            </div>
            <div class="form-group">
              <label>Author</label
              ><input type="text" placeholder="Author" class="form-control" v-model="blog.author" />
            </div>
            <div class="form-group">
              <label>Category</label
              ><select class="form-control form-control-select"
                ><option selected="selected" disabled="disabled"
                  >Category</option
                ><option value="Multimedia">Multimedia</option
                ><option value="Pemrograman">Pemrograman</option
                ><option value="Jaringan">Jaringan</option></select
              >
            </div>
            <div class="form-group">
              <label>Heading</label
              ><input type="text" placeholder="Heading" class="form-control" v-model="blog.heading" />
            </div>
            <div class="form-group">
              <label>CreatedAt</label
              ><input
                type="date"
                placeholder="CreatedAt"
                class="form-control"
                v-model="blog.createdAt"
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
              <froala-editor
                :authToken="authToken"
                v-model="body"
              ></froala-editor>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UpdateHero from './components/UpdateHero'
import blogService from '@/services/blog'
import FroalaEditor from './components/froala-editor'

export default {
  components: {
    UpdateHero,
    FroalaEditor
  },
  data() {
    return {
      blog: null,
      authToken: '',
      render: false
    }
  },
  beforeRouteEnter: (to, from, next) => {
    blogService
      .fetchBlog(to.params.id)
      .then(blog => next(vm => vm.setBlog(blog)))
      .catch(() => {
        next('/404')
      })
  },
  methods: {
    setBlog(blog) {
      this.blog = blog
    },
    setAuthToken(token) {
      this.authToken = 'bearer ' + token
    },
    updateHero(hero) {
      this.$set(this.blog, 'hero', hero)
    }
  }
}
</script>
