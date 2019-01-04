<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入城市名或拼音"
             v-model="keyword">
    </div>
    <div class="content"
         ref="list"
         v-show="keyword">
      <ul class="result">
        <li class="result-item border-bottom"
            v-for="item in resultData"
            :key="item.id">{{ item.name }}</li>
        <li class="result-item border-bottom"
            v-show="hasList">没有找到匹配城市</li>
      </ul>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      resultData: [],
      timer: null
    }
  },
  methods: {
    getCitiy () {
      for (let i in this.cities) {
        this.cities[i].forEach((val) => {
          if (val.name.indexOf(this.keyword) > -1 || val.spell.indexOf(this.keyword) > -1) {
            this.resultData.push(val)
          }
        })
      }
    }
  },
  computed: {
    hasList () {
      return !this.resultData.length
    }
  },
  watch: {
    keyword () {
      this.resultData = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(this.getCitiy, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['list'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'

.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 0.62rem
    padding: 0 0.1rem
    border-radius: 0.06rem
    line-height: 0.62rem
    text-align: center
    color: #666
.content
  position: absolute
  overflow: hidden
  z-index: 1
  top: 1.58rem
  right: 0
  bottom: 0
  left: 0
  background: #eee
  .result
    .result-item
      line-height: 0.62rem
      padding-left: 0.2rem
      color: #666
      background: #fff
</style>
