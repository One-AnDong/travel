<template>
  <!-- S 周末推荐模块 -->
  <div class="weekend">

    <div class="topbar">
      <span class="topbar-title">周末去哪儿</span>
    </div>
    <!-- /topbar -->

    <div class="list"
         v-for="item in weekendList"
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
  data () {
    return {
      'weekendList': [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        'title': '北京温泉排行榜',
        'desc': '细数北京温泉，温暖你的冬天'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        'title': '北京必游TOP10',
        'desc': '来北京必去的景点非这些地方莫属'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        'title': '寻找北京的皇城范儿',
        'desc': '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        'title': '学生最爱的博物馆',
        'desc': '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        'title': '儿童剧场，孩子的乐园',
        'desc': '带宝贝观看演出，近距离体验艺术的无穷魅力'
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
