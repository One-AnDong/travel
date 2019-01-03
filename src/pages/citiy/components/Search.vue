<template>
  <div class="search">
    <input class="search-input"
           type="text"
           placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'search'

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
</style>
