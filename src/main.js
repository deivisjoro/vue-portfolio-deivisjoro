import './assets/main.css';

import { createApp } from 'vue';
import AppComponent from './AppComponent.vue';
import router from './router';
import { createPinia } from 'pinia';
import Particles from 'vue3-particles';
import VueWriter from 'vue-writer';
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'

const app = createApp(AppComponent);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Particles);
app.use(VueWriter);
app.component('GDialog', GDialog);
app.mount('#app');
