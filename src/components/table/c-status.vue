<template>
<span :class="addClass()" class="table-status">
  {{ name }}
</span>
</template>

<script>
export default {
  name: "c-status",
  props: {
    name: String,
  },

  methods: {
    addClass() {
      if (this.name.toLowerCase() === "Обработка".toLowerCase())
        return "table-status-progress"
      else if (this.name.toLowerCase() === "Утверждено".toLowerCase() || this.name.toLowerCase() === "Онлайн".toLowerCase() || this.name.toLowerCase() === "Оплачен".toLowerCase() )
        return "table-status-done"
      else if (this.name.toLowerCase() === "Отклонено".toLowerCase() || this.name.toLowerCase() === "Оффлайн".toLowerCase() || this.name.toLowerCase() === "Неоплачен".toLowerCase() )
        return "table-status-reject"
      else
        return 'table-status-none'
    }
  }
}
</script>

<style scoped>

</style>