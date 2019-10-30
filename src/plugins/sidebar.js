const SidebarStore = {
  showSidebar: true,
  displaySidebar(value) {
    this.showSidebar = value
  }
}

export default {
  install(Vue) {
    let app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    })
    Vue.prototype.$sidebar = app.sidebarStore
  }
}
