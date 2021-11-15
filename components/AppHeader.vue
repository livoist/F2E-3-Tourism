<template lang="pug">
.header
  .headerLogo
    NuxtLink(to="/searchPage")
      img(src="@img/header-logo.png")

  ul
    li(v-for="item in headerList")
      NuxtLink(:to="item.path")
        p {{ item.chName }}
        p {{ item.enName }}

  .hintItem
    .favorite
      img(src="@img/heart.png")

    .hint
      img(src="@img/hint.png")

</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      headerList: [
        {
          chName: '找景點',
          enName: 'ATTRACTION',
          path: ''
        },
        {
          chName: '找美食',
          enName: 'DELICACY',
          path: ''
        },
        {
          chName: '找活動',
          enName: 'ACTIVITY',
          path: ''
        },
        {
          chName: '探索更多',
          enName: 'MORE',
          path: ''
        },
      ]
    }
  }
}
</script>