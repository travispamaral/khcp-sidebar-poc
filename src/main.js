import Vue from 'vue'
import App from './App.vue'
import KIcon from '@kongponents/kicon'

Vue.component('KIcon', KIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
