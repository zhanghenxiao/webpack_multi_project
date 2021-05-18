import Vue from 'vue'
import Router from 'vue-router'
import two from './pages/two'
import { routes } from '../project1/router.js'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/two',
//       name: 'two',
//       component: two
//     }
//   ]
// })

let routerArr = [{
  path: '/two',
  component: two
}]

let initRoute = new Router({
  // 拼接路由
	routes: routes.concat(routerArr)
})

export default initRoute
