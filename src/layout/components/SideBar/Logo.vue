<template>
  <div class="sidebar-logo-container">
    <router-link to="/" class="sidebar-logo-link">
      <img :src="logo" alt="logo" class="sidebar-logo">
      <h1 class="sidebar-title">{{title}}</h1>
    </router-link>
  </div>
</template>

<script>
import logoImg from '@/assets/logo/logo.png'
export default {
  name: 'Logo',
  data () {
    return {
      logo: logoImg,
      title: 'Ruoyi管理系统'
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    & .sidebar-logo-link{
      height: 100%;
      width: 100%;
      display: inline-block;
      text-align: center;
      & .sidebar-logo {
        height: 32px;
        width: 32px;
        vertical-align: middle;
        margin-right: 12px;
      }
      & .sidebar-title{
        display: inline-block;
        color: #fff;
        font-size: 14px;
        vertical-align: middle;
        font-weight: 600;
      }
    }

  }

</style>
