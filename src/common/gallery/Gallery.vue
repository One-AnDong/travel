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
      type: Array
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
