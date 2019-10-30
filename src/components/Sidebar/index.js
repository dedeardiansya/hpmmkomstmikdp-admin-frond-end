import Sidebar from './Sidebar'
import SidebarItem from './SidebarItem'
import SidebarToggle from './SidebarToggle'

const SidebarStore = {
  showSidebar: true,
  displaySidebar(value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {
  install(Vue) {
    let app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    })
    Vue.prototype.$sidebar = app.sidebarStore
    Vue.component('side-bar', Sidebar)
    Vue.component('sidebar-item', SidebarItem)
    Vue.component('sidebar-toggle', SidebarToggle)
  }
}

export default SidebarPlugin
