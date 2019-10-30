<template>
  <li class="sidebar-item">
    <router-link
      :to="link.path"
      @click.native="linkClick"
      class="sidebar-link"
      :target="link.target"
      :href="link.path"
    >
      <div class="sidebar-link-wrapper">
        <span class="sidebar-link-icon"><i :class="link.icon"/></span>
        <span class="sidebar-link-text">{{ link.name }}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'sidebar-item',
  props: {
    link: {
      type: Object,
      default: () => {
        return {
          name: '',
          path: '',
          icon: ''
        }
      }
    }
  },
  methods: {
    linkClick() {
      if (this.$sidebar && this.$sidebar.showSidebar === true) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>
