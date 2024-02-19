import { createApp } from 'vue'
import App from '@/App.vue'
// router
import router from '@/router'
// layouts
import Container from '@/layouts/Container.vue'
// components
import NavigationBar from '@/components/common/NavigationBar/NavigationBar.vue'
// Importing the global css file
import "@/styles/global.css"

const app = createApp(App)

// router import
app.use(router)

// layout register
app.component('AppContainer', Container)

// component register
app.component('NavigationBar', NavigationBar)

app.mount('#app')

