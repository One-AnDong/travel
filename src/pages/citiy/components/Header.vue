<template>
  <!-- S 头部模块 -->
  <div class="header">
    <div class="header__back">
      <font-awesome-icon :icon="['fas','chevron-left']"
                         size='lg' />
    </div>
    <!-- /头部返回模块 -->

    <h1 class="header__titile">
      城市选择
    </h1>
    <!-- /头部标题 -->

  </div>
  <!-- E 头部模块 -->

</template>
<script>
export default {
  name: 'Header',
  props: {
    citiy: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'

/* 头部模块
--------------------------------------------------- */
.header
  position: relative
  height: 0.86rem
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header__back
    position: absolute
    left: 0
    top: 0
    width: 0.64rem
    text-align: center
  .header__titile
    font-size: 0.32rem
    text-align: center
</style>
