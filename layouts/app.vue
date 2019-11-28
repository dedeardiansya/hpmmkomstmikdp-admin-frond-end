<template>
  <div
    class="app-layout"
    :class="{ 'hide-sidebar': !this.$sidebar.showSidebar }"
  >
    <sidebar-toggle />
    <sidebar>
      <template slot="items">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/'
          }"
        >
          <svg-icon-equalizer />
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Blog',
            path: '/blog'
          }"
        >
          <svg-icon-cipboard-list />
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Event',
            path: '/event'
          }"
        >
          <svg-icon-book-open />
        </sidebar-item>
      </template>
    </sidebar>
    <div class="layout-main">
      <navbar></navbar>
      <div class="container-fluid py-3">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'
import SidebarItem from '@/components/layouts/SidebarItem'
import SidebarToggle from '@/components/layouts/SidebarToggle'
export default {
  components: {
    Navbar,
    Sidebar,
    SidebarItem,
    SidebarToggle
  }
}
</script>
