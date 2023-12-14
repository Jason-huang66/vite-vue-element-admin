import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { camelCase } from 'lodash-es'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = import.meta.glob('./modules/*.js', { eager: true })

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = {}

for (const path in modulesFiles) {
  const moduleName = camelCase(path.replace(/(\.\/modules\/|\.js)/g, ''))
  modules[moduleName] = modulesFiles[path].default ?? modulesFiles[path]
}

const store = new Vuex.Store({
  modules,
  getters
})

export default store
