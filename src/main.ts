import { createApp } from 'vue';
import App from '@/App.vue';
// router
import router from '@/router';
// import pinia to create store for states management
import { createPinia } from 'pinia';
// layouts
import Container from '@/layouts/Container.vue';
import Popup from './layouts/Popup.vue';
// components
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import MaskedImage from '@/components/MaskedImage/MaskedImage.vue';
import CurvedText from '@/components/CurvedText/CurvedText.vue';
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
app.component('Popup', Popup);

// component register
app.component('NavigationBar', NavigationBar);
app.component('MaskedImage', MaskedImage);
app.component('CurvedText', CurvedText);

app.mount('#app');
