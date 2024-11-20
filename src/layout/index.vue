<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <div>
        <nav-bar></nav-bar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import SideBar from '@/layout/components/SideBar/index.vue'
import NavBar from '@/layout/components/NavBar.vue'
import TagsView from '@/layout/components/TagsView/index.vue'
import AppMain from '@/layout/components/AppMain.vue'

export default {
  name: 'Layout',
  components: { AppMain, TagsView, NavBar, SideBar },
  mounted () {
    console.log('gsdtoken', this.$store.state.user.token)
  }
}
</script>

<style scoped lang="scss">
  .app-wrapper {
    width: 100%;
    height: 100%;
  }

</style>
