<template>
  <div
    :class="{ 'show-toggle': showToggle }"
    class="toggle-open-sidebar p-2 bg-white shadow"
  >
    <button
      @click="$sidebar.displaySidebar(!$sidebar.showSidebar)"
      class="btn btn-label-primary btn-icon btn-sm"
    >
      <svg-icon-angle-double-right />
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showToggle: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY < 60) {
        this.showToggle = false
      } else {
        this.showToggle = true
      }
    }
  }
}
</script>
