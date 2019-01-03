<template>
  <div class="alphabet">
    <ul class="alphabet__list">
      <li class="alphabet__list-item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          v-for="item in letter"
          :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 列表的第一个字母元素距离屏幕顶部距离的值
    this.startY = this.$refs['A'][0].offsetTop + 78
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          let touchY = e.touches[0].clientY // 当前触摸位置的y轴的值
          let index = Math.floor((touchY - this.startY) / 20)// 根据移动的距离得出当前在第几个字母
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letter () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'

.alphabet
  .alphabet__list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    width: 0.4rem
    top: 1.58rem
    right: 0
    bottom: 0
    .alphabet__list-item
      line-height: 0.4rem
      text-align: center
      color: $bgColor
</style>
