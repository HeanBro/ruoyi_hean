<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <router-link v-if="collapse" to="/" class="sidebar-logo-link">
      <img :src="logo" alt="logo" class="sidebar-logo">
      <h1 class="sidebar-title">{{title}}</h1>
    </router-link>
    <router-link v-else to="/" class="sidebar-logo-link">
      <img v-if="logo" :src="logo" alt="logo" class="sidebar-logo">
      <h1 v-else class="sidebar-title">{{title}}</h1>
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
  },
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
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
    &.collapse{
     .sidebar-logo {
       margin-right: 0;
     }
    }

  }

</style>
