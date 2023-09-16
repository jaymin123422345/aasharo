
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router configuration
import VueLazyload from 'vue-lazyload'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue } from 'bootstrap-vue';

const app = createApp(App);
// Register BootstrapVue
// app.use(BootstrapVue);
// Use Vue Router
app.use(router);
app.use(VueLazyload)

app.mount('#app');
