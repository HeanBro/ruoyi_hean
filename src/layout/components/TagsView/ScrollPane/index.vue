<script>
export default {
  name: 'ScrollPane'
}
</script>

<template>
  <el-scrollbar :vertical="false" class="scroller-container">
    <slot>

    </slot>
  </el-scrollbar>
</template>

<style lang="scss">
  .scroller-container{

  }
</style>
