<template>
  <div class="main-table__user">
    <div class="main-table__user_img">
      <img :src="require(`@/assets/img/${img}`)" alt="">
    </div>
    <div class="main-table__user_block">
      <div class="main-table__user_name">{{ name }}</div>
      <div class="main-table__user_country">
        <c-flag class="main-table__user_country_icon" :iso="flag"/>
        <span class="main-table__user_country_name">{{ country }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CFlag from '@/components/UI/c-flag';

export default {
  name: "c-user",
  components: {CFlag},
  props: {
    name: String,
    flag: String,
    country: String,
    img: String
  }
}
</script>

<style scoped>

</style>