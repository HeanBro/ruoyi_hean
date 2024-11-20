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
import MenuItem from '@/layout/components/SideBar/Item.vue'
import AppLink from '@/layout/components/SideBar/Link.vue'
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'SideBarItem',
  methods: {
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  },
  components: { AppLink, MenuItem },
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
