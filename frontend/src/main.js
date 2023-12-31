import './assets/bootstrap.css';
import 'bootstrap';
import './assets/main.css'

import util from './util'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faPlusCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios"

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(faEdit, faTrash, faPlusCircle, faCheckCircle, faTimesCircle)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(VueSweetalert2);
app.use(Toast);
app.use(store);

axios.defaults.baseURL = 'http://localhost:8989/api'
app.config.globalProperties.$http = axios;
app.config.globalProperties.$util = util;

app.mount('#app')
