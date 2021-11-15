<template lang="pug">
.detailPage
  .top
    .left
      .tags
        p {{ `# ${detailContent.Class1}` }}
        p {{ `# ${detailContent.Level}` }}
      .titles
        .name {{ detailContent.Name }}
        .address
        .tel {{ detailContent.Phone }}
      .openTimes {{ detailContent.OpenTime }}
    .right
      img(:src="detailContent.Picture.PictureUrl1")

  .middle
    .des
      p {{ detailContent.DescriptionDetail }}

  .bottom
    .other
      p 服務設施
      p 停車場 / 公廁 / 淋浴設備 / 販售部
    .other
      p 交通方式
      p 自行開車 / 搭乘大眾運輸
    .other
      p 相關連結
      p 官方粉絲團

</template>

<script>
export default {
  name: 'datailPage',
  data() {
    return {
      detailContent: ''
    }
  },
  props: {
    params: {
      target: Object
    }
  },
  created() {
    this.detailContent = this.$route.query.target
    console.log('d-content', this.$route.query.target)
  }
}
</script>