import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase.js'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Toasted from 'vue-toasted';

Vue.use(Toasted);
Vue.component('loading-overlay', Loading)
Vue.config.productionTip = false


let app
auth.onAuthStateChanged(() => {
  if (!app) 
  {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})