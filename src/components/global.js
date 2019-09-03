// import vContent from '@/components/content'
import vIndex from '@/components/index'

function gComponents(Vue) {
  if (gComponents.installed) return false
//   Vue.component('vContent', vContent)
  Vue.component('vIndex', vIndex)
}

export default gComponents