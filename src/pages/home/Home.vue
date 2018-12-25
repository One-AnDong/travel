<template>
  <div>
    <home-header :citiy="citiy"></home-header>
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
      citiy: '',
      swiperData: [],
      iconData: [],
      recommendData: [],
      weekendData: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.citiy = data.citiy
        this.swiperData = data.swiperList
        this.iconData = data.iconList
        this.recommendData = data.recommendList
        this.weekendData = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
