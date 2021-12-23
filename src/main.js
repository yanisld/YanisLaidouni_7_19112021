import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'


createApp(App).use(store).use(router).mount('#app')
