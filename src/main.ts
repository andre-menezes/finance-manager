import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import './main.css';
const app = createApp(App);

app.component('default-layout', DefaultLayout);

app.use(router);

app.mount('#app');
