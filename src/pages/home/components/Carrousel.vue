<template>
  <div class="carrousel">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperImg"
                    :key="item.id">
        <img class="carrousel__img"
             :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperImg: [
        { id: 1, url: 'http://img1.qunarzz.com/piao/fusion/1812/d4/d51b0de13bdaeb02.jpg_750x200_a16ebfe3.jpg' },
        { id: 2, url: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg' },
        { id: 3, url: 'http://img1.qunarzz.com/piao/fusion/1811/b7/1e9c4ca462741f02.jpg_750x200_842d5261.jpg' }
      ]

    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
