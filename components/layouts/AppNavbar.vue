<template>
  <nav>
    <div class="top py-3">
      <div class="container-fluid">
        <div class="d-flex">
          <div class="mr-auto">
            <router-link to="/" tag="a">
              <img :src="Logo" height="40px" />
            </router-link>
          </div>
          <div class="ml-auto">
            <b-dropdown text="Dede ard..." right>
              <b-dd-header>Dede ardiansya</b-dd-header>
              <b-dropdown-item>Logout</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom bg-dark">
      <div class="container-fluid">
        <div class="text-center nav-wrap">
          <b-button variant="dark" to="/">DASHBOARD</b-button>
          <b-button variant="dark" to="/article">ARTICLE</b-button>
          <b-button variant="dark" to="/gallery">GALLERY</b-button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Logo from '~/assets/img/logo.png'
export default {
  data() {
    return {
      Logo
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-wrap .btn {
  min-width: 130px;
}
</style>
