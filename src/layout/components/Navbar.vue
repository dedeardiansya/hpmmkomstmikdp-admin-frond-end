<template>
  <nav class="layout-navbar">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="left">
          <button
            class="btn btn-label-primary btn-icon mr-2"
            @click="$sidebar.displaySidebar(!$sidebar.showSidebar)"
          >
            <i class="simple-icon-list"></i>
          </button>
          <button class="btn btn-label-success btn-icon">
            <i class="simple-icon-bell"></i>
          </button>
        </div>
        <div class="center">
          <router-link to="/dashboard" class="navbar-logo">
            <img src="@/assets/img/logo.png" />
          </router-link>
        </div>
        <div class="right">
          <button class="btn btn-label-warning btn-icon">
            <i class="simple-icon-magnifier"></i>
          </button>
          <button class="btn btn-label-danger btn-icon ml-2">
            <i class="simple-icon-logout"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
