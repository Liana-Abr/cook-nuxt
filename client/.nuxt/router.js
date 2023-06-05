import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0babc3df = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _94564f8a = () => interopDefault(import('../pages/createrecipes.vue' /* webpackChunkName: "pages/createrecipes" */))
const _5dbebf2e = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _4b3e4d0a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7e85858a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _9f22190c = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _6b96cba6 = () => interopDefault(import('../pages/reg.vue' /* webpackChunkName: "pages/reg" */))
const _9ba720f4 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _73d2b0e3 = () => interopDefault(import('../pages/recipes/change/_id.vue' /* webpackChunkName: "pages/recipes/change/_id" */))
const _c7e5ed2c = () => interopDefault(import('../pages/category/_category.vue' /* webpackChunkName: "pages/category/_category" */))
const _9f90e73c = () => interopDefault(import('../pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _10b93664 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0babc3df,
    name: "category"
  }, {
    path: "/createrecipes",
    component: _94564f8a,
    name: "createrecipes"
  }, {
    path: "/favorites",
    component: _5dbebf2e,
    name: "favorites"
  }, {
    path: "/login",
    component: _4b3e4d0a,
    name: "login"
  }, {
    path: "/profile",
    component: _7e85858a,
    name: "profile"
  }, {
    path: "/recipes",
    component: _9f22190c,
    name: "recipes"
  }, {
    path: "/reg",
    component: _6b96cba6,
    name: "reg"
  }, {
    path: "/search",
    component: _9ba720f4,
    name: "search"
  }, {
    path: "/recipes/change/:id?",
    component: _73d2b0e3,
    name: "recipes-change-id"
  }, {
    path: "/category/:category",
    component: _c7e5ed2c,
    name: "category-category"
  }, {
    path: "/recipes/:id",
    component: _9f90e73c,
    name: "recipes-id"
  }, {
    path: "/",
    component: _10b93664,
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
