import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

// (1)
import { ElButton } from 'element-plus'

// (2)
// import installElementPlus from '@/plugins/element'
// import 'element-plus/theme-chalk/src/base.scss'

// (3)
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

// (1)
app.component(ElButton.name, ElButton)

// (2)
// installElementPlus(app)

// (3)
// app.use(ElementPlus)

app.use(router)
app.mount('#app')
