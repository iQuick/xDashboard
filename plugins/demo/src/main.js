import { createApp } from 'vue'
import { tlayout } from 'tlayout';
import App from './App.vue'

import 'tlayout/style.css'

const app = createApp(App)
app.use(tlayout);
app.mount('#app')
