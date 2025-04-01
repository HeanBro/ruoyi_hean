import Dict from '@/utils/dict/Dict'
import { mergeOptions } from '@/utils/dict/DictOptions'

export default function (Vue, options) {
  mergeOptions(options)
  Vue.mixin({
    data () {
      const dict = new Dict()
      return {
        dict
      }
    },
    created () {
      this.dict.init(this.$options.dicts).then(() => {

      })
    }
  })
}
