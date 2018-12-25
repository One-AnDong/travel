<template>
  <div>
    <home-header></home-header>
    <home-carrousel></home-carrousel>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarrousel from './components/Carrousel'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarrousel,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
