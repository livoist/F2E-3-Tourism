<template lang="pug">
.searchPage
  SideMenu

  .resources
    .userSearch
      .searchBlock
        .inputBlock
          img(src="@img/search.png")
          input(type="text" placeholder="想去哪裡？")
        .searchBtn GO

      p 排序方式

      .sorts
        p 熱門優先
        .slash
        p 距離優先

    .searchResource
      .content(v-for="item in cityTours")
        NuxtLink(:to="{ path: '/searchPage/detailPage', query: { target: item } }")
          img(:src="item.Picture.PictureUrl1")
          .contentInner
            p {{ item.Name.slice(0, 13) }}
            .location
              img(src="@img/locIcon.png")
              p {{ item.City }}

</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      cityTours: []
    }
  },
  methods: {
    async getCityTours(city) {
      if (city === '') return
      await this.$store.dispatch('getCityTours', city)
      this.cityTours = this.$store.state.cityTour
      // this.cityTours = this.cityTours.map(item => item.Name)
      console.log('item', this.cityTours[0])
    }
  },
  created() {
    this.getCityTours('Taipei')
  }
}
</script>