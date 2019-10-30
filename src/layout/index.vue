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
            icon: 'iconsminds-shop-4',
            path: '/dashboard'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Blog',
            icon: 'iconsminds-library',
            path: '/blog'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Blog',
            icon: 'iconsminds-library',
            path: '/blog'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Blog',
            icon: 'iconsminds-library',
            path: '/blog'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Blog',
            icon: 'iconsminds-library',
            path: '/blog'
          }"
        />
      </template>
    </sidebar>
    <div class="layout-main">
      <navbar></navbar>
      <div class="container-fluid py-3">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarItem from './components/SidebarItem'
import SidebarToggle from './components/SidebarToggle'
export default {
  components: {
    Navbar,
    Sidebar,
    SidebarItem,
    SidebarToggle
  }
}
</script>
