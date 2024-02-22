import { createApp } from 'vue';
import App from '@/App.vue';
// router
import router from '@/router';
// layouts
import Container from '@/layouts/Container.vue';
// components
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import MaskedImage from '@/components/MaskedImage/MaskedImage.vue';
import CurvedText from './components/CurvedText/CurvedText.vue';
// Importing the global css file
import '@/styles/global.css';

const app = createApp(App);

// router import
app.use(router);

// layout register
app.component('AppContainer', Container);

// component register
app.component('NavigationBar', NavigationBar);
app.component('MaskedImage', MaskedImage);
app.component('CurvedText', CurvedText);

app.mount('#app');
