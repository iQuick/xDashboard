import { createApp } from 'vue'
import { tlayout } from 'xdash-desp';
import App from './App.vue'

import 'xdash-desp/style.css'

const app = createApp(App)
app.use(tlayout);
app.mount('#app')
