<template lang="pug">
#home
  .search
    .banner
      img(src="@img/banner.png")
    
    .searchBlock
      .inputBlock
        img(src="@img/search.png")
        input(type="text" placeholder="想去哪裡？")
      .searchBtn GO

  .explore
    .top
      .textContent
        .title Explore
        .subTitle 探索台灣每個角落
        .des 台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。
      
      .imgs
        .img(v-for="(item, idx) in imgs1")
          img(:src="require(`@img/explore-${idx + 1}.png`)")
          p {{ item }}

    .bottom
      ul.sectionLits
        li 都市文情：北台灣
        li 休閒樂活：中台灣
        li 自然生態：東台灣
        li 小島風情：離島地區

      .imgs
        .img(v-for="(item, idx) in imgs2")
          img(:src="require(`@img/explore-b-${idx + 1}.png`)")
          p {{ item }}

  .participate
    img(src="@img/participate-banner.png")
    .right
      .participateDes
        .title Participate
        .subTitle 參與四季的更迭
        .des 根據季節的熱門活動主題，邀請你一同享受旅行中的每一個時刻。
      
      ul.sectionLits
        li 初春花海漫遊
        li 豔夏水上活動
        li 微秋星空露營
        li 寒冬暖心溫泉
    
  .enjoy
    .top
      .column
        .title Enjoy
        .subTitle 享受在地獨特風味
      .column
        .des 充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。
        .moreFood 更多台灣美食

    .bottom
      .imgs
        .img(v-for="n in 6")
          img(:src="require(`@img/enjoy-${n}.png`)")

  .subscribe
    img(src="@img/subscribeMaterial.png")
    .column
      .title Subscribe
      .subTitle 每個月來一場自在旅行
      .des 如果您願意收到每月的旅遊資訊，一起感受台灣旅行的美好。

      .sendEmail
        p youremail@example.com
        img(src="@img/sendIcon.png")
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      imgs1: ['台東金剛大道', '南投日月潭文武廟', ''],
      imgs2: ['南投合歡山', '北投圖書館', '樹林三角埔頂山步道', '水里車埕車站']
    }
  }
}
</script>
