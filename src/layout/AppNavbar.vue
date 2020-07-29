<template>
  <div class="app-navbar">
    <div class="app-navbar__lg" v-click-outside="clickOutside">
      <router-link class="app-navbar__brand mb-auto mr-auto" to="/">
        <img src="@/assets/img/logo-hpmm.png" alt="Logo HPMM" />
      </router-link>
      <ul class="app-navbar__nav nav" :class="{ navclose }">
        <li class="nav-item" v-for="(link, i) in links" :key="i">
          <router-link :to="link.to" class="nav-link" :title="link.name">
            <i :class="`feather-${link.icon}`"></i>
            <span class="overlay-text text-primary">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="nav mt-auto ml-auto">
        <li class="nav-item d-md-none">
          <a href="#" @click.prevent="navclose = !navclose" class="nav-link">
            <i :class="`feather-${navclose ? 'menu' : 'x'}`"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="/logout"
            @click.prevent="logout"
            class="nav-link text-danger"
          >
            <i :class="`feather-log-out`"></i>
            <span class="overlay-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT } from '../store/action.types'
export default {
  data() {
    return {
      navclose: true,
      links: [
        { icon: 'compass', to: '/dashboard', name: 'Dashboard' },
        { icon: 'clipboard', to: '/post', name: 'Post' },
        { icon: 'users', to: '/member', name: 'Member' },
        { icon: 'image', to: '/gallery', name: 'Gallery' }
      ]
    }
  },
  computed: {
    ...mapGetters(['loading', 'error', 'auth'])
  },
  methods: {
    clickOutside() {
      if (!this.navclose) this.navclose = true
    },
    logout() {
      this.$store.dispatch(LOGOUT)
    }
  },
  watch: {
    $route(val, old) {
      if (val.path !== old.path) this.navclose = true
    },
    auth: {
      deep: true,
      immediate: true,
      handler(val) {
        if (!val) this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
.app-navbar {
  position: fixed;
  top: 0;
  left: 0;

  &__lg {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 100vh;
    background-color: $white;
    @include media-breakpoint-down(md) {
      flex-direction: row;
      border-right: none;
      height: 80px;
      width: 100vw;
    }
  }

  &__brand {
    display: flex;
    width: 80px;
    min-height: 80px;

    img {
      display: block;
      height: 30px;
      margin: auto;
    }
  }

  &__nav {
    @include media-breakpoint-down(sm) {
      position: absolute;
      left: 0;
      right: 0;
      top: 80px;
      background-color: $white;
      height: 81px;
      width: 100vw;
      border-top: 1px solid $border-color;
      .nav-item {
        margin: 0 auto;
      }

      &.navclose {
        display: none;
      }
    }
  }

  .nav-link {
    position: relative;
    display: block;
    width: 80px;
    height: 80px;
    padding: 0;
    text-align: center;
    line-height: 76px;
    font-size: 20px;
    color: $gray-500;
    border: 2px solid transparent;

    .overlay-text {
      display: block;
      position: absolute;
      background-color: $white;
      width: 60px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      text-transform: uppercase;
      font-size: 10px;
      line-height: 60px;
      opacity: 0;
      transition: opacity 250ms ease-in-out;
    }

    &:hover:not(.active) {
      .overlay-text {
        opacity: 1;
      }
    }

    &.active {
      color: $primary;
      border-left-color: $primary;

      @include media-breakpoint-down(md) {
        border-left-color: transparent;
        border-top-color: $primary;
      }
    }
  }
}
</style>
