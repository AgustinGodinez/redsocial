import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min-bockup.css'
import '@/assets/bootstrap.bundle.min.js'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/custom_styles.css'

createApp(App).use(store).use(router).mount('#app')
