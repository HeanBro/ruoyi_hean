<template>
  <div class="navbar">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">

    </div>
  </div>
</template>

<script>
import Hamburger from '@/layout/components/Hamburger/index.vue'
import Breadcrumb from '@/layout/components/Breadcrumb/index.vue'

export default {
  name: 'NavBar',
  components: { Hamburger, Breadcrumb },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    height: 50px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    background: #ffffff;
  }
  .hamburger-container {
    height: 100%;
    float: left;
    line-height: 46px;
    padding: 0 15px;
    cursor: pointer;
  }
  .breadcrumb-container {
    line-height: 46px;
    height: 100%;
    float: left;
    margin-left: 8px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 46px;
  }
</style>
