<template>
  <div class="detail">
    <detail-banner></detail-banner>
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
export default {
  name: 'Detail',
  data () {
    return {
      list: [
        { name: '成人票', child: [{ name: '成人三馆联票', child: [{ name: '广州博物馆' }] }, { name: '成人三景联票', child: [{ name: '越秀公园' }] }] },
        { name: '学生票' },
        { name: '儿童票' },
        { name: '特惠票' }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 15rem
</style>
