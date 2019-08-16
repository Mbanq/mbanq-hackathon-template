import Vue from 'vue'
import App from './App.vue'
// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

// Mbanq API Client
import Mbanq from '@mbanq/api'
const mbanqClient = new Mbanq({
  tenantId: '',
  clientId: '',
  clientSecret: ''
})

Vue.use(BootstrapVue)

Vue.prototype.$mbanq = mbanqClient
Vue.prototype.$api = mbanqClient.api()
Vue.prototype.$localStorage = new Vue({
  data: {
    // token property returning the ls token value
    authenticated: window.localStorage.getItem('authenticated')
  },
  watch: {
    // watcher listening for changes on the token property
    // to ensure the new value is written back to ls
    authenticated (value) { window.localStorage.setItem('authenticated', value) }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
