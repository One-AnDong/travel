<template>
  <div class="banner">
    <img class="banner__img"
         src="http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg"
         @click="handleShowClick">
    <div class="banner__info">
      <div class="banner__info-title">
        武隆天坑地缝国家地质公园(AAAA景区)
      </div>
      <div class="banner__info-count">
        <font-awesome-icon :icon="['fas','image']"
                           size='1x' />
        <span>13</span>
      </div>
    </div>
    <common-gallery v-show="showGallery"
                    @close="handleCloseClick"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  components: {
    CommonGallery
  },
  methods: {
    handleShowClick () {
      this.showGallery = true
    },
    handleCloseClick () {
      this.showGallery = false
    }
  },
  data () {
    return {
      showGallery: false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.banner
  position: relative
  height: 0
  padding-bottom: 55%
  .banner__img
    width: 100%
  .banner__info
    position: absolute
    display: flex
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    .banner__info-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
      color: #fff
      ellipsis()
    .banner__info-count
      width: 1.2rem
      height: 0.32rem
      margin-top: 0.15rem
      border-radius: 0.6rem
      text-align: center
      font-size: 0.24rem
      line-height: 0.32rem
      color: #fff
      background: rgba(0, 0, 0, 0.7)
</style>
