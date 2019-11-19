<template>
  <aside class="sidebar">
    <div class="sidebar-action">
      <div class="action-wrapper">
        <button
          class="btn btn-label-primary btn-lg btn-icon"
          @click="closeSidebar"
        >
          <svg-icon-angle-double-left />
        </button>
      </div>
    </div>
    <div class="sidebar-overflow">
      <scrollbar class="scrollbar">
        <ul class="sidebar-items">
          <slot name="items" />
        </ul>
      </scrollbar>
    </div>
  </aside>
</template>
<script>
import Scrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'Sidebar',
  components: {
    Scrollbar
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true)
    }
  }
}
</script>
