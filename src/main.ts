import { createApp } from 'vue';
import App from '@/App.vue';
// pinia to create store for states management
import { createPinia } from 'pinia';
// lazyLoad image
import VueLazyload from 'vue-lazyload';
// router
import router from '@/router';
// layouts
import {
    AppContainer,
    ProjectViewerPopup,
    PostViewerPopup,
    NavigationBar,
} from '@/layouts';
// components
import { MaskedImage } from '@/components';
// Importing the global css file
import '@/styles/global.css';

import loadingImage from '@/assets/images/loader-320px.gif';
import errorNotFoundImage from '@/assets/images/not-found.svg';

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
    attempt: 1,
});

// layout register
app.component('AppContainer', AppContainer);
app.component('ProjectViewerPopup', ProjectViewerPopup);
app.component('PostViewerPopup', PostViewerPopup);

// component register
app.component('NavigationBar', NavigationBar);
app.component('MaskedImage', MaskedImage);

app.mount('#app');
