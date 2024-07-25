import { createApp } from 'vue'
import App from './App.vue'

// Import Mock
import './mock/index';

// Import UnoCSS
import 'virtual:uno.css'

// Import Router
import router from './router';

// Import Pinia
import { createPinia } from 'pinia'

// Import Ant Design Vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia()
const app = createApp(App)
    
app.use(Antd)
app.use(pinia)
app.use(router)
app.mount('#app')
