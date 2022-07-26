<template>
  <span v-if="iso" class="fi" :class="flagIconClass" :title="title || iso">
  </span>
</template>

<script>
export default {
  name: "c-flag",
  props: {
    iso: { type: String, default: null },
    title: { type: String, default: null },
    squared: { type: Boolean, default: true },
    class: String,
  },
  computed: {
    flagIconClass() {
      return `fi-${this.iso.toLowerCase()}`;
    },
  },
};
</script>

<style>
</style>
