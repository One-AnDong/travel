<template>
  <!-- S 城市页面列表模块 -->
  <div class="list"
       ref="list">
    <div>
      <div class="area">
        <div class="area__titile border-topbottom">
          当前城市
        </div>
        <div class="area__content">
          <div class="wrap">
            <div class="area__content-btn">
              {{ this.$store.state.citiy }}
            </div>
          </div>
        </div>
      </div>
      <!-- /当前城市模块 -->

      <div class="area">
        <div class="area__titile border-topbottom">
          热门城市
        </div>
        <div class="area__content">
          <div class="wrap"
               v-for="item in hot"
               :key="item.id">
            <div class="area__content-btn"
                 @click="handleCitiyClick(item.name)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- /热门城市模块 -->

      <div class="area"
           v-for="(item,key) in cities"
           :key="key">
        <div class="area__titile border-topbottom"
             :ref="key">
          {{ key }}
        </div>
        <div class="area__list">
          <div v-for="itemVal in item"
               :key="itemVal.id"
               class="area__list__item border-bottom"
               @click="handleCitiyClick(itemVal.name)">
            {{ itemVal.name}}
          </div>
        </div>
      </div>
      <!-- /所有城市模块 -->
    </div>
  </div>
  <!-- E 城市页面列表模块 -->

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    hot: Array,
    cities: Object,
    change: String
  },
  methods: {
    handleCitiyClick (val) {
      this.$store.commit('changeCitiy', val)
      this.$router.push('/')
    }
  },
  watch: {
    change () {
      this.scroll.scrollToElement(this.$refs[this.change][0])
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>
<style lang="stylus" scoped>
.border-topbottom
  &::before
    border-color: #ccc
  &::after
    border-color: #ccc
.border-bottom
  &::before
    border-color: #ccc
/* 列表模块
------------------------------------------------- */
.list
  position: absolute
  overflow: hidden
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .area
    .area__titile
      height: 0.52rem
      padding-left: 0.2rem
      line-height: 0.52rem
      font-size: 0.26rem
      color: #666
      background: #eee
  /* 当前城市&&热门城市按钮样式 */
  .area__content
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .wrap
      float: left
      width: 33.3%
      .area__content-btn
        margin: 0.1rem
        padding: 0.1rem 0
        border: 0.02rem solid #ccc
        text-align: center
  /* 城市列表样式 */
  .area__list
    .area__list__item
      height: 0.76rem
      line-height: 0.76rem
      padding-left: 0.2rem
      color: #666
</style>
