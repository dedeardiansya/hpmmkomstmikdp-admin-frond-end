<template>
  <div class="container portfolio-filter">
    <div class="nav">
      <a href="#" @click.prevent="select = 'all'" :class="{ active: select == 'all' }" class="nav-link">All</a>
      <a
        href="#"
        @click.prevent="select = item"
        :class="{ active: select == item }"
        class="nav-link"
        v-for="(item, i) in categories"
        :key="i"
        >{{ item }}</a
      >
    </div>
    <ZoomCenterTransition tag="div" class="row mb-5" group>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i" v-if="select == item.year || select == 'all'">
        <div class="img-wrap">
          <img
            v-preview:slot-gallery
            :data-origin="item.origin"
            :src="item.img + '?id=' + i"
            :alt="item.text"
            class="img-fluid d-block w-100"
          />
        </div>
      </div>
    </ZoomCenterTransition>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
import createPreviewDirective from 'vue-photoswipe-directive'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

export default {
  name: 'GalleryFilter',
  components: {
    ZoomCenterTransition
  },
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      select: 'all',
      categories: []
    }
  },
  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.length) {
          this.categories = [...new Set(val.map(item => item.year))]
        }
      }
    }
  }
}
</script>
