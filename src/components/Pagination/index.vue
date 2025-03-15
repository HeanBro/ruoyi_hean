<script>
export default {
  name: 'Pagination'
}
</script>

<template>
  <div class="pagination-container">
    <el-pagination
      :total="5"
      layout="total, sizes, prev, pager, next, jumper"
    >

    </el-pagination>
  </div>
</template>

<style scoped lang="scss">
  .pagination-container {
    padding: 32px 16px;

  }
</style>
