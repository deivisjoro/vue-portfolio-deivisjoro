import './assets/main.css';

import { createApp } from 'vue';
import AppComponent from './AppComponent.vue';
import router from './router';
import { createPinia } from 'pinia'

const app = createApp(AppComponent);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
