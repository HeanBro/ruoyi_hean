<script>
export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  }
}
</script>

<template>
  <div>
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'"></svg-icon>
  </div>
</template>

<style scoped lang="scss">

</style>
