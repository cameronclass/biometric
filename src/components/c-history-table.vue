<template>

  <div class="main-table main-table-history">
    <div class="main-table__action">
      <h2 class="chart-title">История последовательности</h2>
    </div>
    <div class="main-table__heading">
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Название</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Дата</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Последовательность</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Действие</span>
      </div>
    </div>
    <div class="main-table__content">
      <div class="main-table__item" v-for="item in histories">
        <div class="main-table__cell">
          {{ item.name }}
        </div>
        <div class="main-table__cell main-table__date">
          <span>{{ item.date }}</span>
        </div>
        <div class="main-table__cell main-table__techno">
          <div class="main-table__techno_item" v-for="techno in item.technologies">
            <c-tech-icon :name="techno"/>
          </div>
        </div>
        <div class="main-table__cell main-table__cell_action">
          <c-button class="btn-small btn-color-grey mr-3">
            Скачать SDK
          </c-button>
          <button><i class="i-delete"></i></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import CTechIcon from '@/components/table/c-tech-icon';
import CButton from '@/components/UI/c-button';

export default {
  name: "c-history-table",
  components: {CTechIcon, CButton},
  data() {
    return {
      histories: [
        {
          name: 'Название сценария',
          date: '25.05.2022',
          technologies: ["Liveness Detection"],
        },
        {
          name: 'Название сценария',
          date: '25.05.2022',
          technologies: ['Liveness Detection', 'Document Verification'],
        },
        {
          name: 'Название сценария',
          date: '25.05.2022',
          technologies: ['Liveness Detection', 'Document Verification'],
        },
      ],
    }
  },
  mounted(){
    // console.log(this.histories[0].technologies)
  }
}
</script>

<style scoped>

</style>