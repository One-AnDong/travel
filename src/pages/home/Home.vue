<template>
  <div>
    <home-header></home-header>
    <home-carrousel></home-carrousel>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarrousel from './components/Carrousel'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarrousel
  }
}
</script>
