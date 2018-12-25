<template>
  <!-- S 周末推荐模块 -->
  <div class="weekend">

    <div class="topbar">
      <span class="topbar-title">周末去哪儿</span>
    </div>
    <!-- /topbar -->

    <div class="list"
         v-for="item in weekend"
         :key="item.id">
      <div class="list__item">
        <div class="list__product">
          <img :src="item.imgUrl"
               class="list__product-img">
        </div>
        <div class="list__desc">
          <p class="list__desc-title">{{ item.title }}</p>
          <p class="list__desc-sub">{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <!-- /商品列表模块 -->

  </div>
  <!-- E 热门推荐模块 -->
</template>
<script>
export default {
  name: 'weekend',
  props: {
    weekend: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'

/* 顶栏模块
--------------------------------------------------- */
.topbar
  height: 0.8rem
  line-height: 0.8rem
  background: #eee
  padding-left: 0.24rem
  .topbar-title
    padding-left: 0.05rem
/* 商品列表模块
--------------------------------------------------- */
.list
  .list__item
    border-bottom: 1px solid #eaeaea
    box-sizing: border-box
    .list__product
      .list__product-img
        width: 100%
        height: 27%
    .list__desc
      overflow: hidden
      padding: 0.1rem
      .list__desc-title
        line-height: 0.54rem
        font-size: 0.32rem
        ellipsis()
      .list__desc-sub
        line-height: 0.4rem
        color: #ccc
        ellipsis()
</style>
