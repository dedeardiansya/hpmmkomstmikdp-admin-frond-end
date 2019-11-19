<template>
  <div
    class="toggle-open-sidebar p-2 bg-white shadow"
    :class="{ 'show-toggle': showToggle }"
  >
    <button
      class="btn btn-label-primary btn-icon btn-sm"
      @click="$sidebar.displaySidebar(!$sidebar.showSidebar)"
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
