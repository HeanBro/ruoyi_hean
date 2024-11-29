<script>
export default {
  name: 'RuoYiDoc',
  methods: {
    goto () {
      window.open('www.baidu.com')
    }
  }
}
</script>

<template>
  <div>
    <svg-icon icon-class="question" @click="goto"></svg-icon>
  </div>
</template>

<style scoped lang="scss">

</style>
