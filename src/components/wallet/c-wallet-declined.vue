<template>
  <div class="main-table main-table-declined">
    <div class="main-table__action">
      <h2 class="chart-title">Неоплаченные счета</h2>
    </div>
    <div class="main-table__heading">
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">№</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Название</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Дата</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Статус</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Сумма</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Действие</span>
      </div>
    </div>
    <div class="main-table__content">
      <div class="main-table__item" v-for="item in declined">
        <div class="main-table__cell">
          {{item.id}}
        </div>
        <div class="main-table__cell">
          {{item.name}}
        </div>
        <div class="main-table__cell main-table__date">
          <span>{{ item.date }}</span>
        </div>
        <div class="main-table__cell main-table__status">
          <c-status :name="item.status"/>
        </div>

        <div class="main-table__cell">
          <span>{{ item.value }}$</span>
        </div>
        <div class="main-table__cell main-table__cell_action">
          <c-button class="btn-small btn-color-grey mr-2">Оплатить</c-button>
          <button><i class="i-download"></i></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Flag from '@/components/UI/c-flag';
import CTechIcon from '@/components/table/c-tech-icon';
import CStatus from '@/components/table/c-status';
import CUser from '@/components/table/c-user';
import CSearch from '@/components/table/c-search';
import CButton from '@/components/UI/c-button';

export default {
  name: "c-wallet-declined",
  components: {CTechIcon, Flag, CStatus, CUser, CSearch, CButton},
  data() {
    return {
      declined: [
        {
          id: 1,
          name: 'Liveness Detection',
          status: 'Неоплачен',
          date: '25.05.2022',
          value: 0
        },
        {
          id: 2,
          name: 'Liveness Detection',
          status: 'Неоплачен',
          date: '25.05.2022',
          value: 0
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>