<script>
import { isExternal } from '@/utils/validate'

export default {
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal () {
      return isExternal(this.to)
    },
    type () {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps (to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>

<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<style scoped lang="scss">

</style>
