import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = import.meta.glob('./svg/*.svg');
const requireAll = requireContext => {
 const modules = {};
 for (const path in requireContext) {
   modules[path] = requireContext[path]();
 }
 return modules;
};
requireAll(req);
