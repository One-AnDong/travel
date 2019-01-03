<template>
  <!-- S 热门推荐模块 -->
  <div class="recommend">

    <div class="topbar">
      <font-awesome-icon class="topbar-icon"
                         :icon="['fas','heart']"
                         size='xs' />
      <span class="topbar-title">猜你喜欢</span>
    </div>
    <!-- /topbar -->

    <div class="list"
         v-for="item in recommend"
         :key="item.id">
      <div class="list__item border-bottom">
        <div class="list__product">
          <img :src="item.imgUrl"
               class="list__product-img">
        </div>
        <div class="list__desc">
          <p class="list__desc-title">{{ item.title }}</p>
          <p class="list__desc-sub">{{ item.desc }}</p>
          <button class="list__desc-btn">查看详情</button>
        </div>
      </div>
    </div>
    <!-- /商品列表模块 -->

  </div>
  <!-- E 热门推荐模块 -->
</template>
<script>
export default {
  name: 'recommend',
  props: {
    recommend: {
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
  .topbar-icon
    color: rgb(251, 69, 69)
  .topbar-title
    padding-left: 0.05rem
/* 商品列表模块
--------------------------------------------------- */
.list
  .list__item
    display: flex
    height: 1.9rem
    padding: 0.1rem
    box-sizing: border-box
    .list__product
      .list__product-img
        height: 1.7rem
        width: 1.7rem
    .list__desc
      flex: 1
      overflow: hidden
      margin-left: 0.24rem
      .list__desc-title
        line-height: 0.54rem
        font-size: 0.32rem
        ellipsis()
      .list__desc-sub
        line-height: 0.4rem
        color: #ccc
        ellipsis()
      .list__desc-btn
        margin-top: 0.2rem
        padding: 0 0.2rem
        border-radius: 0.06rem
        line-height: 0.44rem
        background: #ff9300
        color: #fff
</style>
