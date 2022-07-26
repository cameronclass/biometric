<template>
  <div class="card documentation p-4 mb-4">
    <h3 class="documentation__title">{{ title }}</h3>
    <div :style="{ backgroundColor: color }" class="documentation__img">
      <img :src="require(`@/assets/img/${img}`)">
    </div>
    <div class="documentation__value">{{value}}$</div>
  </div>
</template>

<script>
export default {
  name: "c-card",
  props: {
    title: String,
    img: String,
    value: String,
    color: String,
  }
}
</script>

<style>

</style>