<script>
export default {
  name: 'RightToolbar',
  props: {
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleSearch () {
      this.$emit('update:showSearch', !this.showSearch)
    },
    refresh () {
      this.$emit('queryTable')
    }
  }
}
</script>

<template>
  <div class="top-right-btn">
    <el-row>
      <el-tooltip :content="!showSearch ? '显示搜索' : '隐藏搜索'" placement="top">
        <el-button size="mini" circle icon="el-icon-search" @click="toggleSearch()"></el-button>
      </el-tooltip>
      <el-tooltip content="刷新" placement="top">
        <el-button size="mini" circle icon="el-icon-refresh" @click="refresh()"></el-button>
      </el-tooltip>
      <el-tooltip content="显隐列" placement="top">
        <el-button size="mini" circle icon="el-icon-menu"></el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>

<style scoped lang="scss">

</style>
