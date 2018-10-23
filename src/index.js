import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.scss'
// import './assets/styles/style_main.scss'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root)