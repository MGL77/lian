import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Boss from "@/pages/Boss.vue"
import one from "@/pages/one.vue"
import two from "@/pages/two.vue"
import three from "@/pages/three.vue"
import four from "@/pages/four.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/Boss/one"
    },
    {
      path: "/Boss",
      component: Boss,
      children: [{
          path: "one",
          component: one
        },
        {
          path: "two",
          component: two
        },
        {
          path: "three",
          component: three
        },
        {
          path: "four",
          component: four
        },
      ]
    }
  ]
})
