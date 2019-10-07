<template>
  <nav class="bg-secondary mb-8">
    <div class="top py-3 bg-white shadow">
      <div class="container-fluid">
        <div class="d-flex">
          <div class="mr-auto">
            <router-link to="/" tag="a">
              <img :src="Logo" height="43px" />
            </router-link>
          </div>
          <div class="ml-auto">
            <base-button
              type="primary"
              icon="ni ni-circle-08"
              @click="modal = true"
              >{{ profile.name }}</base-button
            >
            <div>
              <modal :show.sync="modal">
                <template slot="header">
                  <h5 class="modal-title">
                    PROFILE
                  </h5>
                </template>
                <form>
                  <base-input
                    v-model="form.name"
                    class="input-group-alternative"
                    placeholder="Name"
                    addon-left-icon="ni ni-circle-08"
                  />
                  <base-input
                    v-model="form.email"
                    class="input-group-alternative"
                    placeholder="Email"
                    addon-left-icon="ni ni-email-83"
                  />
                  <base-input
                    v-model="form.npassword"
                    class="input-group-alternative"
                    placeholder="New Password"
                    type="password"
                    addon-left-icon="ni ni-lock-circle-open"
                  />
                  <base-input
                    v-model="form.password"
                    class="input-group-alternative"
                    placeholder="Password"
                    type="password"
                    addon-left-icon="ni ni-lock-circle-open"
                  />
                  <base-button type="secondary" block
                    >UPDATE PROFILE</base-button
                  >
                </form>
                <template slot="footer"
                  ><base-button
                    type="secondary"
                    class="ml-auto"
                    @click="modal = false"
                  >
                    Close
                  </base-button>
                  <base-button type="danger">Logout</base-button>
                </template>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="nav-wrapper">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <router-link to="/" class="nav-link" tag="a">DASHBOARD</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/article" class="nav-link" tag="a"
              >ARTICLE</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link" tag="a"
              >GALLERY</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Logo from '~/assets/img/logo.png'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        npassword: '',
        password: ''
      },
      Logo,
      modal: false
    }
  },
  computed: {
    profile() {
      return this.$store.getters.profile.user
    }
  },
  created() {
    const { name, email } = this.profile
    this.form.name = name
    this.form.email = email
  },
  methods: {
    logout() {
      this.$cookies.remove('auth_token')
      this.$store.commit('SET_AUTH', null)
      this.$router.push('/login')
    }
  }
}
</script>
