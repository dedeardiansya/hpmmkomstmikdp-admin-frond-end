<template>
  <div
    class="app-layout"
    :class="{ 'hide-sidebar': !this.$sidebar.showSidebar }"
  >
    <sidebar-toggle />
    <side-bar>
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
    </side-bar>
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
export default {
  components: {
    Navbar
  }
}
</script>
