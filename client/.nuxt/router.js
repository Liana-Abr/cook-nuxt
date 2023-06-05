import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a63397f8 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _3f294f76 = () => interopDefault(import('../pages/createrecipes.vue' /* webpackChunkName: "pages/createrecipes" */))
const _fea025b8 = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _5df1bbb6 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _b8c30694 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _39c36ab5 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _18e100a1 = () => interopDefault(import('../pages/reg.vue' /* webpackChunkName: "pages/reg" */))
const _be9056aa = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _145e8688 = () => interopDefault(import('../pages/recipes/change/_id.vue' /* webpackChunkName: "pages/recipes/change/_id" */))
const _3c98df0f = () => interopDefault(import('../pages/category/_category.vue' /* webpackChunkName: "pages/category/_category" */))
const _8db2d346 = () => interopDefault(import('../pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _d76bcec2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _a63397f8,
    name: "category"
  }, {
    path: "/createrecipes",
    component: _3f294f76,
    name: "createrecipes"
  }, {
    path: "/favorites",
    component: _fea025b8,
    name: "favorites"
  }, {
    path: "/login",
    component: _5df1bbb6,
    name: "login"
  }, {
    path: "/profile",
    component: _b8c30694,
    name: "profile"
  }, {
    path: "/recipes",
    component: _39c36ab5,
    name: "recipes"
  }, {
    path: "/reg",
    component: _18e100a1,
    name: "reg"
  }, {
    path: "/search",
    component: _be9056aa,
    name: "search"
  }, {
    path: "/recipes/change/:id?",
    component: _145e8688,
    name: "recipes-change-id"
  }, {
    path: "/category/:category",
    component: _3c98df0f,
    name: "category-category"
  }, {
    path: "/recipes/:id",
    component: _8db2d346,
    name: "recipes-id"
  }, {
    path: "/",
    component: _d76bcec2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
