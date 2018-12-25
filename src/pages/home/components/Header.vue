<template>
  <!-- S 头部模块 -->
  <div class="header">
    <div class="header__back">
      <font-awesome-icon :icon="['fas','chevron-left']"
                         size='lg' />
    </div>
    <!-- /头部返回模块 -->

    <div class="header__search">
      <font-awesome-icon :icon="['fas','search']"
                         size='1x' />
      输入城市/景点/游玩主题
    </div>
    <!-- /头部搜索模块 -->

    <div class="header__position">
      <span>{{ citiy }}</span>
      <font-awesome-icon :icon="['fas','caret-down']"
                         size='lg' />
    </div>
    <!-- /定位地址显示模块 -->

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
  display: flex
  flex-wrap: nowrap
  flex-justify-content: space-btween
  height: 0.86rem
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header__back
    width: 0.64rem
    text-align: center
  .header__search
    flex: 1
    height: 0.62rem
    border-radius: 0.1rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    line-height: 0.62rem
    overflow: hidden
    color: #ccc
    background: #fff
  .header__position
    width: 1.24rem
    text-align: center
</style>
