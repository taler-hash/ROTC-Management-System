import '../css/app.css'

import { createApp } from 'vue'
import App from './views'
import router from './router'
import VueCookies from 'vue-cookies'

import './axios'

const app = createApp(App)

app.use(VueCookies)
app.use(router)
app.mount('#app')