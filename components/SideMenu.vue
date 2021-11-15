<template lang="pug">
.sideMenu
  .curPage 首頁 / 找景點

  .curSearch
    p 您正在搜尋
    ul
      li(
        v-for="item in curSearch"
        :key="item.id"
        :class="{ 'active': curTarget === item }"
        @click="curTarget = item"
      ) {{ item }}

  .slash

  .searchRange
    p 縮小搜尋範圍
    .clearSearch 清除條件
  
  .locationRange
    p 地理區域
    .filterLocation 縣市地區

  .searchContent
    p 景點主題
    ul
      li(
        v-for="item in curContent"
        :key="item.id"
        :class="{ 'active': curView === item }"
        @click="curView = item"
      ) {{ item }}

</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      curView: '',
      curTarget: '',
      curSearch: ['景點', '美食', '活動'],
      curContent: [
        '花海漫遊',
        '水上活動',
        '星空露營',
        '溫泉湯屋',
        '親子同遊',
        '歷史文化'
      ]
    }
  }
}
</script>