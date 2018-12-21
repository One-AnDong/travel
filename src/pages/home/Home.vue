<template>
  <div>
    <home-header></home-header>
    <home-carrousel></home-carrousel>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarrousel from './components/Carrousel'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarrousel,
    HomeIcons
  }
}
</script>
