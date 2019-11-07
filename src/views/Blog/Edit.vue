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
      </div>
    </div>
  </div>
</template>
<script>
import UpdateHero from './components/UpdateHero'
import blogService from '@/services/blog'
export default {
  components: {
    UpdateHero
  },
  data() {
    return {
      blog: {}
    }
  },
  beforeRouteEnter: (to, from, next) => {
    blogService
      .fetchBlog(to.params.id)
      .then(blog => {
        next(vm => vm.setBlog(blog))
      })
      .catch(() => {
        next('/404')
      })
  },
  methods: {
    setBlog(blog) {
      this.blog = blog
    },
    updateHero(hero) {
      console.log('dede')
      this.$set(this.blog, 'hero', hero)
    }
  }
}
</script>
