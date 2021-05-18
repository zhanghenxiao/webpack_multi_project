import Vue from 'vue'
import Router from 'vue-router'
import one from './pages/one'

Vue.use(Router)

// 等同下面的写法
// export default new Router({
//   routes: [
//     {
//       path: '/one',
//       name: 'one',
//       component: one
//     }
//   ]
// })

let routes = [
  {
    path: '/one',
    name: 'one',
    component: one
  }
]

let initRoute =  new Router({
  routes
})

export {
  initRoute,
  routes
}
