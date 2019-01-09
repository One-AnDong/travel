<template>
  <div class="gallery"
       @click="handleCloseClick">
    <div class="wrap">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs"
                      :key="index">
          <img class="gallery__img"
               :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
      }
    }
  },
  methods: {
    handleCloseClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.gallery>>>.swiper-container
  overflow: inherit
.gallery
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: #333
  z-index: 999
  .wrap
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallery__img
      width: 100%
      height: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
