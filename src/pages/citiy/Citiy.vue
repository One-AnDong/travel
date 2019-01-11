<template>
  <div class="citiy">
    <citiy-header></citiy-header>
    <citiy-search :cities="cities"></citiy-search>
    <citiy-list :hot="hotCities"
                :cities="cities"
                :change="change"></citiy-list>
    <citiy-alphabet :cities="cities"
                    @change="handleChange"></citiy-alphabet>
  </div>
</template>
<script>
import CitiyHeader from './components/Header'
import CitiySearch from './components/Search'
import CitiyList from './components/List'
import CitiyAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'citiy',
  components: {
    CitiyHeader,
    CitiySearch,
    CitiyList,
    CitiyAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      change: ''
    }
  },
  methods: {
    handleGetInfo () {
      axios.get('https://www.easy-mock.com/mock/5c3836f8422c0541bcaa47e2/travel/citiy').then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handleChange (val) {
      this.change = val
    }
  },
  mounted () {
    this.handleGetInfo()
  }
}
</script>
