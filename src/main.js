import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import { store } from './store';
import VueFeather from 'vue-feather';
import VueMeta from 'vue-meta';
import VueApexCharts from 'vue-apexcharts';
import * as Axios from 'axios'
import VueAxios from 'vue-axios'


//My Code
import { ValidationObserver, ValidationProvider, } from 'vee-validate';

Vue.component( 'ValidationObserver', ValidationObserver );
Vue.component( 'ValidationProvider', ValidationProvider );
Vue.use( VueMeta );


// Import Theme custom
import '@/assets/scss/style.scss';
import 'flag-icons/css/flag-icons.min.css';

const axios = Axios.default.create({
  baseURL: "http://dev.biometric.kz:8080/v1/"
});

Vue.use(VueAxios, axios)
Vue.use( VueFeather );
Vue.use( BootstrapVue );
Vue.use( VueApexCharts );
Vue.component( 'apexchart', VueApexCharts );


new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' )