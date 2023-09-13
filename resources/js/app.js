import '../css/app.css'

import { createApp } from 'vue'
import App from './views'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')