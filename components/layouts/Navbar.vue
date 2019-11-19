<template>
  <nav class="layout-navbar">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="left">
          <button
            class="btn btn-label-primary btn-icon mr-2"
            @click.prevent="$sidebar.displaySidebar(!$sidebar.showSidebar)"
          >
            <svg-icon-angle-double-left v-if="$sidebar.showSidebar" />
            <svg-icon-angle-double-right v-else />
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
          <button
            class="btn btn-label-danger btn-icon ml-2"
            @click.prevent="signOut"
          >
            <i class="simple-icon-logout"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    signOut() {
      this.$swal({
        title: 'You sure you want to logout?',
        type: 'info',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Sign Out',
        confirmButtonClass: 'btn btn-danger',
        cancelButtonClass: 'btn btn-primary'
      })
        .then(() => this.$store.dispatch('SIGN_OUT'))
        .then(() => {
          this.$router.push('/login')
        })
        .catch(e => {
          this.$swal({
            title: 'Error',
            type: 'error',
            text: e.message,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary btn-wide'
          })
        })
    }
  }
}
</script>
