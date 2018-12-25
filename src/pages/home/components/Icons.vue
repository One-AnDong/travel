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
                 :src="item.imgUrl">
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
  name: 'icons',
  props: {
    icons: {
      type: Array
    }
  },
  data () {
    return {
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
      this.icons.forEach((item, index) => {
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
.icons >>> .swiper-pagination-bullet-active
  background: $bgColor
/* 图标模块
------------------------------------------------ */
.icons
  padding-top: 0.2rem
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
