<template>
  <div class="kt-portlet">
    <div class="kt-portlet__body kt-ribbon">
      <div
        class="kt-ribbon__target p-2 shadow-sm bg-white text-primary rounded font-weight-bold"
        style="top: 10px; left: 10px;"
      >
        {{ blog.public ? 'PUBLIC' : 'PRIVATE' }}
      </div>
      <div class="kt-portlet__content">
        <div class="row">
          <div class="col-md-3 mb-3">
            <img :src="blog.hero || Placeholder" alt="" />
          </div>
          <div class="col-md-9 mb-3">
            <h3>{{ blog.title }}</h3>
            <p class="font-weight-bold">
              <span class="text-primary">{{ blog.category }}</span> - by
              <span class="text-primary">{{ blog.author }}</span
              >, {{ createdAt }}
            </p>
            <p>
              {{ blog.description }}
            </p>
            <button
              class="btn btn-sm btn-label-primary"
              :class="
                updatePublicLoading
                  ? 'active kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
                  : ''
              "
              :disabled="updatePublicLoading"
              @click="updateBlogPublic({ id: blog.id, value: !blog.public })"
            >
              MAKE {{ !blog.public ? 'PUBLIC' : 'PRIVATE' }}
            </button>
            &nbsp;
            <router-link
              class="btn btn-sm btn-label-info"
              :to="{ name: 'edit_blog', params: { id: blog.id } }"
              >EDIT</router-link
            >
            &nbsp;
            <button class="btn btn-sm btn-label-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Placeholder from '@/assets/img/placeholder.svg'
import { getDate } from '@/utils'
import { UPDATE_BLOG_PUBLIC } from '@/store/actions.type'
export default {
  props: {
    blog: Object,
    default: () => {}
  },
  data() {
    return {
      Placeholder,
      updatePublicLoading: false
    }
  },
  computed: {
    createdAt() {
      return getDate(this.blog.createdAt).toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  methods: {
    updateBlogPublic(data) {
      this.updatePublicLoading = true
      this.$store
        .dispatch(UPDATE_BLOG_PUBLIC, data)
        .then(() => {
          this.updatePublicLoading = false
        })
        .catch(e => {
          this.updatePublicLoading = false
          this.$swal({ type: 'error', text: e.message })
        })
    }
  }
}
</script>
