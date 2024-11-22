<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowChild(item.children,item)">
      <app-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" >
          <menu-item :icon="onlyOneChild.meta.icon" :title="onlyOneChild.meta.title"></menu-item>
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
import it from 'element-ui/src/locale/lang/it'

export default {
  name: 'SideBarItem',
  computed: {
    it () {
      return it
    }
  },
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
          path:''
        }
        return true
      }
      return false
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
