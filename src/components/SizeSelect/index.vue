<script>
export default {
  name: 'SizeSelect',
  data () {
    return {
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' }
      ]
    }
  },
  methods: {
    handleSetSize (size) {
      console.log('heanaaa', size)
    }
  }
}
</script>

<template>
  <div>
    <el-dropdown trigger="click" @command="handleSetSize">
      <div>
        <svg-icon icon-class="size"></svg-icon>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :command="item.value">
          {{item.label}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">

</style>
