<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowChild(item.children,item) && !item.alwaysShow">
      <app-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" >
          <item :icon="onlyOneChild.meta.icon" :title="onlyOneChild.meta.title"></item>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="basePath">
      <template slot="title">
        <item :icon="item.meta.icon" :title="item.meta.title"></item>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :item="child"
        :key="child.path"
        :base-path="resolvePath(child.path)"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import Item from '@/layout/components/SideBar/Item.vue'
import AppLink from '@/layout/components/SideBar/Link.vue'
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'SidebarItem',
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    hasOneShowChild (children, parent) {
      if (!children) {
        children = []
      }
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: ''
        }
        return true
      }
      return false
    }
  },
  components: { AppLink, Item },
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
