// Importing the global css file
import '@/styles/global.css';

// pinia to create store for states management
import { createPinia } from 'pinia';
import { createApp } from 'vue';
// lazyLoad image
import VueLazyload from 'vue-lazyload';

import App from '@/App.vue';
import loadingImage from '@/assets/images/loader-320px.gif';
import errorNotFoundImage from '@/assets/images/not-found.webp';
// components
// layouts
import { AppContainer } from '@/layouts';
// router
import router from '@/router';

const app = createApp(App);
const pinia = createPinia();

// router import
app.use(router);
// pinia import
app.use(pinia);
// lazyLoad import
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorNotFoundImage,
  loading: loadingImage,
  // retry once after load asset fail
  attempt: 2,
});

// layout register
app.component('AppContainer', AppContainer);

app.mount('#app');
