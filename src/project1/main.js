// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  {initRoute as router } from './router.js'
// import router from './router'
// console.log(router);

Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
// 	console.log(to)
// 	console.log(from)
//     next()
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})