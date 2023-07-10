import './assets/main.css';

import { createApp } from 'vue';
import AppComponent from './AppComponent.vue';
import router from './router';
import { createPinia } from 'pinia';
import Particles from 'vue3-particles';
import VueWriter from 'vue-writer';

const app = createApp(AppComponent);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Particles);
app.use(VueWriter);
app.mount('#app');
