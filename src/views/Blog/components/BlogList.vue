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
            <button class="btn btn-sm btn-label-primary">
              MAKE {{ !blog.public ? 'PUBLIC' : 'PRIVATE' }}
            </button>
            &nbsp;
            <button class="btn btn-sm btn-label-info">EDIT</button>&nbsp;
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
export default {
  props: {
    blog: Object,
    default: () => {}
  },
  data() {
    return {
      Placeholder
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
  }
}
</script>
