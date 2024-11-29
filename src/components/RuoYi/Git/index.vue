<script>
export default {
  name: 'RuoYiGit',
  methods: {
    goto () {
      window.open('https://github.com/ruoyi/ruoyi')
    }
  }
}
</script>

<template>
  <div>
    <svg-icon icon-class="github" @click="goto"></svg-icon>
  </div>
</template>

<style scoped lang="scss">

</style>
