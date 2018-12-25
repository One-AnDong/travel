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
         v-for="item in recommendList"
         :key="item.id">
      <div class="list__item">
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
  data () {
    return {
      recommendList: [
        {
          'id': '0001',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg',
          'title': '广州花城汇MAG环球魔幻世界',
          'desc': '花城汇MAG环球魔幻世界'
        }, {
          'id': '0002',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          'title': '南山滑雪场',
          'desc': '北京专业级滑雪圣地'
        }, {
          'id': '0003',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
          'title': '天安门广场',
          'desc': '我爱北京天安门，天安门上太阳升'
        }, {
          'id': '0004',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
          'title': '水立方',
          'desc': '中国的荣耀，阳光下的晶莹水滴'
        }, {
          'id': '0005',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
          'title': '温都水城养生馆',
          'desc': '各种亚热带植物掩映其间仿佛置身热带雨林'
        },
        {
          'id': '0006',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          'title': '故宫',
          'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
        }]
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
    border-bottom: 1px solid #eaeaea
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
