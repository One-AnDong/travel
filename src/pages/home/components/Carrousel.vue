<template>
  <!-- S 首页轮播模块 -->
  <div class="carrousel">
    <swiper :options="swiperOption"
            v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperData"
                    :key="item.id">
        <img class="carrousel__img"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
  <!-- E 首页轮播模块 -->
</template>

<script>
export default {
  name: 'carrousel',
  props: {
    swiperData: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperData.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.carrousel >>> .swiper-pagination-bullet-active
  background: #fff
.carrousel
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 26.7%
  background: #eee
.carrousel__img
  width: 100%
</style>
