<template>
  <li class="sidebar-item">
    <router-link
      :to="link.path"
      :target="link.target"
      :href="link.path"
      class="sidebar-link"
    >
      <div class="sidebar-link-wrapper">
        <span class="sidebar-link-icon">
          <slot></slot>
        </span>
        <span class="sidebar-link-text">{{ link.name }}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'SidebarItem',
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
  }
}
</script>
