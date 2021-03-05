<template>
  <div class="gallery-page py-4" v-if="gallery">
    <div class="container">
      <PageTitle>{{ gallery.label }}</PageTitle>
    </div>
    <GalleryList :items="gallery.items" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import GalleryList from '@/components/Gallery'
export default {
  name: 'Gallery',
  components: {
    PageTitle,
    GalleryList
  },
  computed: {
    gallery() {
      return this.$store.getters.config.gallery
    }
  }
}
</script>
