import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import moment from 'moment';
Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
})