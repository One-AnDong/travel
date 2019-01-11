<template>
  <div class="list">
    <div class="list__item "
         v-for="(item,index) in list"
         :key="index">
      <div class="list__item__title border-bottom">
        <div class="list__item-icon">
        </div>
        {{ item.title }}
      </div>
      <div class="child"
           v-if="item.children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus">
.list
  .list__item
    .list__item__title
      height: 0.8rem
      padding: 0 0.2rem
      line-height: 0.8rem
      font-size: 0.32rem
      .list__item-icon
        position: relative
        left: 0.06rem
        top: 0.06rem
        display: inline-block
        width: 0.36rem
        height: 0.36rem
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: 0.1rem
        background-size: 0.4rem 3rem
    .child
      padding: 0 0.2rem
</style>
