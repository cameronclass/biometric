<template>

  <div class="main-table">
    <div class="main-table__action">
      <h2 class="chart-title">Добавить пользователя</h2>
      <div class="main-table__action_block">
        <div class="main-table__action_add">
          <c-button class="btn-small">
            <i class="i-plus mr-2"></i>
            <span>Добавить</span>
          </c-button>
        </div>
      </div>
    </div>
    <div class="main-table__heading">
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Имя</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Почта</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Должность</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Состояние</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Дата подключения</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Действие</span>
      </div>
    </div>
    <div class="main-table__content">
      <div class="main-table__item" v-for="user in users">
        <div class="main-table__cell">
          <c-user :name="user.name" :flag="user.flag" :country="user.country" :img="user.img"/>
        </div>
        <div class="main-table__cell">
          {{ user.email }}
        </div>
        <div class="main-table__cell">
          {{ user.position }}
        </div>
        <div class="main-table__cell main-table__status">
          <c-status :name="user.status"/>
        </div>
        <div class="main-table__cell main-table__date">
          <span>{{ user.date }}</span>
        </div>
        <div class="main-table__cell main-table__cell_action">
          <c-button class="btn-small btn-color-blue mr-3">
            Изменить
          </c-button>
          <button><i class="i-delete"></i></button>
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
  name: "c-settings-table",
  components: {CTechIcon, Flag, CStatus, CUser, CSearch, CButton},
  data() {
    return {
      users: [
        {
          name: 'John Keter',
          flag: 'us',
          country: 'USA',
          email: 'orinbaev1910@mail.ru',
          position: 'Дизайнер',
          status: 'Онлайн',
          img: 'template/User.png',
          date: '25.05.2022',
        },
        {
          name: 'John Keter',
          flag: 'ru',
          country: 'RU',
          email: 'orinbaev1910@mail.ru',
          position: 'Менеджер',
          status: 'Оффлайн',
          img: 'template/User.png',
          date: '25.05.2022',
        },
        {
          name: 'John Keter',
          flag: 'us',
          country: 'USA',
          email: 'orinbaev1910@mail.ru',
          position: 'Бухгалтер',
          status: 'Оффлайн',
          img: 'template/User.png',
          date: '25.05.2022',
        },
        {
          name: 'John Keter',
          flag: 'us',
          country: 'USA',
          email: 'orinbaev1910@mail.ru',
          position: 'Программист',
          status: 'Онлайн',
          img: 'template/User.png',
          date: '25.05.2022',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>