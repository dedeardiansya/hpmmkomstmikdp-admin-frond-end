import Vue from 'vue'

const sidebarStore = {
  showSidebar: true,
  displaySidebar(value) {
    this.showSidebar = value
  }
}

const app = new Vue({
  data: { sidebarStore }
})

Vue.prototype.$sidebar = app.sidebarStore
