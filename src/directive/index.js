import hasPermi from '@/directive/permission/hasPermi'

const install = function (Vue) {
  Vue.directive('hasPermi', hasPermi)
}

export default install
