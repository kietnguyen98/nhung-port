import { createApp } from 'vue';
import App from '@/App.vue';
// pinia to create store for states management
import { createPinia } from 'pinia';
// router
import router from '@/router';
// layouts
import {
    Container,
    ProjectViewerPopup,
    PostViewerPopup,
    NavigationBar,
} from '@/layouts';
// components
import { MaskedImage } from '@/components';
// Importing the global css file
import '@/styles/global.css';

const app = createApp(App);
const pinia = createPinia();

// router import
app.use(router);
// pinia import
app.use(pinia);

// layout register
app.component('AppContainer', Container);
app.component('ProjectViewerPopup', ProjectViewerPopup);
app.component('PostViewerPopup', PostViewerPopup);

// component register
app.component('NavigationBar', NavigationBar);
app.component('MaskedImage', MaskedImage);

app.mount('#app');
