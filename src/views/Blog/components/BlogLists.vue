<template>
  <div class="kt-portlet__body">
    <blog-list v-for="i in 15" :key="i" />
  </div>
</template>
<script>
import BlogList from './BlogList'
export default {
  components: {
    BlogList
  }
}
</script>
