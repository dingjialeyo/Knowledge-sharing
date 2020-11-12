import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 手动配置element-ui
// 导入element-ui模块
import ElementUI from 'element-ui';
// 对应的element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
// 配置到Vue
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
