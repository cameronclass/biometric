<template>

  <div class="main-table">
    <div class="main-table__action">
      <h2 class="chart-title">Список транзакций </h2>
      <div class="main-table__action_block">
        <div class="main-table__action_search">
          <c-search/>
        </div>
        <div class="main-table__action_filter">
          <c-button v-b-modal.modal-filter class="btn-small btn-color-grey">
            <i class="i-filter mr-2"></i>
            <span>Фильтр</span>
          </c-button>
        </div>
      </div>
    </div>
    <div class="main-table__heading">
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Название</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Используемые технологии</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Статус</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Дата</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">IP</span>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Токен</span>
        <i class="i-arrows"></i>
      </div>
      <div class="main-table__heading_item">
        <span class="main-table__heading_name">Подробнее</span>
      </div>
    </div>
    <div class="main-table__content">
      <div class="main-table__item" v-for="user in users">
        <div class="main-table__cell">
          <c-user :name="user.name" :flag="user.flag" :country="user.country" :img="user.img"/>
        </div>
        <div class="main-table__cell main-table__techno">
          <div class="main-table__techno_item" v-for="item in user.technologies">
            <c-tech-icon :name="item"/>
          </div>
        </div>
        <div class="main-table__cell main-table__status">
          <c-status :name="user.status"/>
        </div>
        <div class="main-table__cell main-table__date">
          <span>{{ user.date }}</span>
        </div>
        <div class="main-table__cell main-table__ip">
          <span>IP: {{ user.ip }}</span>
        </div>
        <div class="main-table__cell main-table__token">
          <span>{{ user.token }}</span>
        </div>
        <div class="main-table__cell main-table__cell_action">
          <button><img src="@/assets/img/icons/open-table.svg" alt=""></button>
        </div>
      </div>
    </div>
    <div class="main-table__pagination main-pagination">
      <button class="main-pagination__btn">
        <i class="i-arrow-left"></i>
        <span class="main-pagination__btn_text">Предыдущая</span>
      </button>
      <ul class="main-pagination__items">
        <li class="main-pagination__item">1</li>
        <li class="main-pagination__item">2</li>
        <li class="main-pagination__item">3</li>
        <li class="main-pagination__item">4</li>
        <li class="main-pagination__item">...</li>
        <li class="main-pagination__item">10</li>
      </ul>
      <button class="main-pagination__btn">
        <span class="main-pagination__btn_text">Следующая</span>
        <i class="i-arrow-right"></i>
      </button>
    </div>
    <b-modal size="lg" hide-footer hide-header id="modal-filter" ref="modal-filter">
      <div class="main-table__filter">
        <div class="main-table__filter_block">
          <div class="row">
            <div class="col-lg-3">
              <h3 class="main-subtitle mb-4">По Дате:</h3>

              <b-form-checkbox-group
                  v-model="selected"
                  :options="options.date"
              />

            </div>
            <div class="col-lg-3">
              <h3 class="main-subtitle mb-4">По статусу:</h3>

              <b-form-checkbox-group
                  v-model="selected"
                  :options="options.status"
              />

            </div>
            <div class="col-lg-6">
              <h3 class="main-subtitle mb-4">По технологиям:</h3>

              <b-form-checkbox-group
                  v-model="selected"
                  :options="options.techno"
              />

            </div>
          </div>
        </div>
        <div class="main-table__filter_action">
          <div>
            <button @click="toggleAll" class="main-table__filter_reset">Сбросить изменения</button>
          </div>
          <div class="d-flex">
            <c-button class="btn-small btn-color-grey mr-3" @click="hideModal">Отменить</c-button>
            <c-button class="btn-small" @click="toggleModal">Применить</c-button>
          </div>
        </div>
      </div>
    </b-modal>
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
  name: "c-main-table",
  components: {CTechIcon, Flag, CStatus, CUser, CSearch, CButton},
  data() {
    return {
      users: [
        {
          name: 'John Keter',
          flag: 'us',
          country: 'USA',
          status: 'Утверждено',
          img: 'template/User.png',
          technologies: ['Liveness Detection', 'Document Verification'],
          date: '25.05.2022',
          ip: '192.168.1.1',
          token: 'Название сценария',
        },
        {
          name: 'John Keter',
          flag: 'us',
          country: 'USA',
          status: 'Утверждено',
          img: 'template/User.png',
          technologies: ['Liveness Detection', 'Document Verification'],
          date: '25.05.2022',
          ip: '192.168.1.1',
          token: 'Название сценария',
        }
      ],
      selected: [],
      options: {
        date: [
          {text: 'Сегодня', value: 'today'},
          {text: 'За эту неделю', value: 'week'},
          {text: 'За этот месяц', value: 'month'},
          {text: 'За этот год', value: 'year'}
        ],
        status: [
          {text: 'Обработка', value: 'handling'},
          {text: 'Утверждено', value: 'approved'},
          {text: 'Отклонено', value: 'declined'},
          {text: 'Не закончено', value: 'unfinished'}
        ],
        techno: [
          {text: 'Liveness Detection', value: 'live-detect'},
          {text: 'Document Verification', value: 'document'},
          {text: 'Face 2 Face', value: 'face-to'},
          {text: 'Data Save', value: 'data-save'},
          {text: 'Mobile Verification', value: 'mobile'},
          {text: 'Email Verification', value: 'email-verification'},
          {text: 'AML Processing', value: 'aml'},
        ]
      },
    }
  },
  methods: {
    showModal() {
      this.$refs['modal-filter'].show()
    },
    hideModal() {
      this.$refs['modal-filter'].hide()
    },
    toggleModal() {
      this.$refs['modal-filter'].toggle()
    },
    toggleAll() {
      this.selected.splice(0)
    }
  }
}
</script>

<style scoped>

</style>