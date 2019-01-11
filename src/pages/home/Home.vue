<template>
  <div>
    <home-header></home-header>
    <home-carrousel :swiperData="swiperData"></home-carrousel>
    <home-icons :icons="iconData"></home-icons>
    <home-recommend :recommend="recommendData"></home-recommend>
    <home-weekend :weekend="weekendData"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarrousel from './components/Carrousel'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperData: [],
      iconData: [],
      recommendData: [],
      weekendData: [],
      lastCitiy: ''
    }
  },
  computed: {
    ...mapState(['citiy'])
  },
  methods: {
    getHomeInfo () {
      axios.get('https://www.easy-mock.com/mock/5c3836f8422c0541bcaa47e2/travel/index/?citity=' + this.citiy).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperData = data.swiperList
        this.iconData = data.iconList
        this.recommendData = data.recommendList
        this.weekendData = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCitiy = this.citiy
  },
  activated () {
    if (this.lastCitiy !== this.citiy) {
      this.getHomeInfo()
      this.lastCitiy = this.citiy
    }
  }
}
</script>
