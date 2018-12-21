<template>
  <div class="icons">

    <!-- S 图标模块 -->
    <swiper :options="swiperOption">

      <swiper-slide v-for="(page,index) of pages"
                    :key="index">
        <div class="icons__item"
             v-for="item of page"
             :key="item.id">
          <div class="icons__item__img">
            <img class="icons__item__img-content"
                 :src="item.url">
          </div>
          <p class="icons__desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <!-- /图标显示区块 -->

      <div class="swiper-pagination"
           slot="pagination"></div>
      <!-- /轮播提示点 -->

    </swiper>
    <!-- E 图标模块 -->

  </div>
</template>
<script>
export default {
  data () {
    return {
      iconsImg: [
        { id: 1, url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票' },
        { id: 2, url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '广州必游' },
        { id: 3, url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园' },
        { id: 4, url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', desc: '游乐场' },
        { id: 5, url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', desc: '珠江夜游' },
        { id: 6, url: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', desc: '泡温泉' },
        { id: 7, url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '一日游' },
        { id: 8, url: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif', desc: '年终大促' },
        { id: 9, url: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png', desc: '玩转长隆' },
        { id: 10, url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', desc: '全部玩乐' }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsImg.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

/* swiper自定义样式
------------------------------------------------ */
.icons >>> .swiper-container
  width: 100%
  height: 0
  padding-bottom: 58%
  border-bottom: 1px solid #eee
.icons >>> .swiper-pagination-bullet-active
  background: $bgColor
/* 图标模块
------------------------------------------------ */
.icons__item
  position: relative
  float: left
  overflow: hidden
  width: 25%
  height: 0
  padding-bottom: 25%
  .icons__item__img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0.44rem
    box-sizing: border-box
    padding: 0.1rem
    .icons__item__img-content
      display: block
      height: 100%
      margin: 0 auto
/* 描述 */
.icons__desc
  position: absolute
  left: 0
  right: 0
  bottom: 0
  height: 0.44rem
  line-height: 0.44rem
  text-align: center
  color: $darkTextColor
  ellipsis()
</style>
