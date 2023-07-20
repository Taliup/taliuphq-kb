import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const t = require.context('./components/Shared', true, /\.vue$/i)
t.keys().map((key) =>
  Vue.component(key.split('/').pop().split('.')[0], t(key).default),
);

const p = require.context('./components/Sections', true, /\.vue$/i)
p.keys().map((key) => {
  Vue.component(key.split('/').pop().split('.')[0], p(key).default);
}
);

new Vue({
  render: h => h(App),
}).$mount('#app')
