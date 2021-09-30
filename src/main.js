import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

// (1)
// import { ElButton } from 'element-plus'

// (2)
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

// (3)
// app.component(ElButton.name, ElButton)

// (4)
// app.use(ElementPlus)

app.use(router)
app.mount('#app')
