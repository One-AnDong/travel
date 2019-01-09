<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  naem: 'FadeAnimation'
}
</script>
<style lang="stylus">
.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: 0.5s opacity
</style>
