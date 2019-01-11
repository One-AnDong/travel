<template>
  <div class="detail">
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :galleryImgs="galleryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      galleryImgs: [],
      sightName: '',
      bannerImg: ''
    }
  },
  methods: {
    getInfo () {
      axios.get('https://www.easy-mock.com/mock/5c3836f8422c0541bcaa47e2/travel/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.categoryList
        this.galleryImgs = res.data.galleryImgs
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
      }
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
