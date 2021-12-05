import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import api from './api.js';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueCookies from "vue-cookies";
import cors from "cors"


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//use cookies doLogin
Vue.use(VueCookies);

Vue.use(cors);


// $ é uma convenção que o Vue usa para indicar que aquela
//variavel estará diponível em todas as instâncias do Vue.
Vue.prototype.$http = axios;

Vue.prototype.$http = api;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
