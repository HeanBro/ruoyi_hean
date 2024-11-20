<template>
  <div>
    <logo/>
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color= "variables.menuBackground"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#ffd04b">
        <side-bar-item
            v-for="(route, index) in sidebarRouters"
            :item="route"
            :key="route.path + index"
            :base-path="route.path"
        >

        </side-bar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from '@/layout/components/SideBar/Logo.vue'
import variables from '@/assets/styles/variables.scss'
import SideBarItem from '@/layout/components/SideBar/SidebarItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SideBar',

  components: { SideBarItem, Logo },
  computed: {
    ...mapGetters(['sidebarRouters']),
    variables () {
      return variables
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.el-scrollbar {
  height: calc(100% - 50px);
}
</style>
