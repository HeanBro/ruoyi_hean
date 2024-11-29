<template>
  <div class="navbar">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" :is-active="sidebar.opened"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <header-search class="right-menu-item"></header-search>
      <el-tooltip content="源码地址" placement="bottom" effect="dark">
        <ruo-yi-git class="right-menu-item"></ruo-yi-git>
      </el-tooltip>
      <el-tooltip content="文档地址" placement="bottom" effect="dark">
        <ruo-yi-doc class="right-menu-item"></ruo-yi-doc>
      </el-tooltip>
      <screenfull class="right-menu-item"></screenfull>
      <el-tooltip content="布局大小" placement="bottom" effect="dark">
        <size-select class="right-menu-item"></size-select>
      </el-tooltip>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>布局设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { mapGetters } from 'vuex'
import HeaderSearch from '@/components/HeaderSearch/index.vue'
import RuoYiDoc from '@/components/RuoYi/Doc/index.vue'
import RuoYiGit from '@/components/RuoYi/Git/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'
import SizeSelect from '@/components/SizeSelect/index.vue'

export default {
  name: 'NavBar',
  components: { SizeSelect, Screenfull, RuoYiGit, RuoYiDoc, HeaderSearch, Hamburger, Breadcrumb },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
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
    line-height: 50px;
    height: 100%;
    float: left;
    margin-left: 8px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 46px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }
      }
    }
  }
</style>
