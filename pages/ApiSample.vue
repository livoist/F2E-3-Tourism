<template lang="pug">
div
  .block
    select(v-model="curSelect")
      option(
        v-for="name in selects"
        :value="name"
      ) {{ name }}

    .btn(@click="getCityTour(curSelect)") Search

  .t3
    p(v-for="item in cityTours") {{ item }}

</template>

<script>
export default {
  data() {
    return {
      userTypeIn: '',
      curSelect: '',
      selects: [
        'Taipei',
        'NewTaipei',
        'Taoyuan',
        'Taichung',
        'Tainan',
        'Kaohsiung',
        'Keelung',
        'Hsinchu',
        'HsinchuCounty',
        'MiaoliCounty',
        'ChanghuaCounty',
        'NantouCounty',
        'YunlinCounty',
        'ChiayiCounty',
        'Chiayi',
        'PingtungCounty',
        'YilanCounty',
        'HualienCounty',
        'TaitungCounty',
        'KinmenCounty',
        'PenghuCounty',
        'LienchiangCounty'
      ],
      cityTours: []
    }
  },
  methods: {
    async getCityTour(city) {
      if (city === '') return
      await this.$store.dispatch('getCityTours', city)
      this.cityTours = this.$store.state.cityTour
      this.cityTours = this.cityTours.map(item => item.Name)
    }
  }
}
</script>
