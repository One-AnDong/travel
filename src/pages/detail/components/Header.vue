<template>
  <!-- S 旅游详情页头部模块 -->
  <div class="header">
    <router-link class="btn"
                 to="/"
                 tag="div">
      <font-awesome-icon :icon="['fas','chevron-left']"
                         size='lg'
                         class="btn-icon" />
    </router-link>
    <div class="fixed"
         v-show="showFixed"
         :style="styleObj">
      <router-link class="fixed__back"
                   tag="div"
                   to="/">
        <font-awesome-icon :icon="['fas','chevron-left']"
                           size='lg' />
      </router-link>
      <!-- /头部返回模块 -->

      <h1 class="fixed__titile">
        景点详情
      </h1>
      <!-- /头部标题 -->
    </div>

  </div>
  <!-- E 旅游详情页头部模块 -->

</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      showFixed: false,
      styleObj: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      let opacity = top / 140
      if (top > 60) {
        opacity = opacity > 1 ? 1 : opacity
        this.showFixed = true
        this.styleObj = {
          opacity
        }
      } else {
        this.showFixed = false
      }
      console.log(top)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'

/* 返回按钮模块
--------------------------------------------------- */
.btn
  position: absolute
  top: 0.2rem
  left: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  text-align: center
  border-radius: 0.4rem
  background: rgba(0, 0, 0, 0.8)
  .btn-icon
    color: #fff
/* 头部模块
--------------------------------------------------- */
.fixed
  // display: none
  position: fixed
  top: 0
  left: 0
  right: 0
  height: 0.86rem
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  z-index: 998
  .fixed__back
    position: absolute
    left: 0
    top: 0
    width: 0.64rem
    text-align: center
  .fixed__titile
    font-size: 0.32rem
    text-align: center
</style>
s
