import Vue from 'vue'
import Router from 'vue-router'
import OracleTypeJava from '@/components/OracleTypeJava'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OracleTypeJava',
      component: OracleTypeJava
    }
  ]
})
