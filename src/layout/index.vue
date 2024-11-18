<script>

export default {
  name: 'Layout',
  mounted () {
    console.log('gsdtoken', this.$store.state.user.token)
  }
}
</script>
<template>
  <div>layout</div>
</template>

<style scoped lang="scss">

</style>
