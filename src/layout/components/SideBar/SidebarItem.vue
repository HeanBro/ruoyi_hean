<template>
  <div v-if="!item.hidden">
    <template v-if="!item.children">
      <app-link :to="basePath">
        <el-menu-item :index="basePath" >
          <menu-item :icon="item.meta.icon" :title="item.meta.title"></menu-item>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="basePath">
      <template slot="title">
        <menu-item :icon="item.meta.icon" :title="item.meta.title"></menu-item>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :item="child"
        :key="child.path"
        :base-path="resolvePath(child.path)"
      >
      </side-bar-item>
    </el-submenu>

  </div>
</template>

<script>
import it from 'element-ui/src/locale/lang/it'
import MenuItem from '@/layout/components/SideBar/Item.vue'
import AppLink from '@/layout/components/SideBar/Link.vue'
import * as path from 'path'

export default {
  name: 'SideBarItem',
  methods: {
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  },
  components: { AppLink, MenuItem },
  computed: {
    it () {
      return it
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
