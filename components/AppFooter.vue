<template lang="pug">
.footer
  .followUs
    p Follow us
    .icons
      .icon(v-for="n in 3")
        img(:src="require(`@img/footerIcon-${n}.png`)")

  p Copyright © 2021 TRAVEL. All rights reserved.

  .lang
    .ch CH
    .en EN
    .ja JA

</template>

<script>
export default {
  name: 'Footer'
}
</script>