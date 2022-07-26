<template>
  <div class="container-fluid">
    <div class="card p-4">
      <c-history-table/>
    </div>
  </div>
</template>
<script>
import CHistoryTable from "@/components/c-history-table";

export default {
  name: 'technology-history',
  components: {CHistoryTable},

};
</script>
