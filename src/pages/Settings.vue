<template>
  <div class="container-fluid settings-block">

    <div class="settings-nav">
      <div class="settings-fixed card">
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <button @click="goto('main')" class="sidebar__link">
              <img class="sidebar__btn_icon" src="@/assets/img/icons/nav/document.svg" alt="">
              <span class="sidebar__btn_text">Основная информация</span>
            </button>
          </li>
          <li class="sidebar__item">
            <button @click="goto('payment')" class="sidebar__link">
              <img class="sidebar__btn_icon" src="@/assets/img/icons/nav/wallet.svg" alt="">
              <span class="sidebar__btn_text">Реквизиты</span>
            </button>
          </li>
          <li class="sidebar__item">
            <button @click="goto('password')" class="sidebar__link">
              <img class="sidebar__btn_icon" src="@/assets/img/icons/nav/help.svg" alt="">
              <span class="sidebar__btn_text">Пароль</span>
            </button>
          </li>
          <li class="sidebar__item">
            <button @click="goto('roles')" class="sidebar__link">
              <img class="sidebar__btn_icon" src="@/assets/img/icons/nav/setting.svg" alt="">
              <span class="sidebar__btn_text">Добавление пользователя</span>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="settings-content">
      <div ref="main" class="card p-4 mb-4">

        <form @submit.prevent action="#">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="chart-title m-0">Основная информация</h3>
            <c-button class="btn-small">Редатировать</c-button>
          </div>
          <div class="settings-main-form">
            <div class="settings-main-form__img">
              <div class="settings-main-form__avatar">
                <img src="@/assets/img/icons/add-image.svg" alt="">
              </div>
            </div>
            <div class="settings-main-form__block">
              <c-setting-main/>
            </div>
          </div>
        </form>

      </div>

      <div ref="payment" class="card p-4 mb-4">
        <div class="settings-payment__title">
          <h3 class="chart-title m-0">Реквизиты</h3>
          <div class="settings-payment__block">
            <c-button v-b-modal.modal-change-wallet class="settings-payment__change btn-small btn-color-grey">Изменить
            </c-button>
            <c-button v-b-modal.modal-add-wallet class="settings-payment__edit btn-small">Добавить</c-button>
          </div>
        </div>
        <div class="settings-payment">
          <c-settings-payment/>
        </div>
      </div>

      <div ref="password" class="card p-4">
        <h3 class="chart-title m-0">Изменить пароль</h3>
        <c-settings-password/>
      </div>
    </div>

    <div class="settings-roles">
      <div ref="roles" class="card p-4">
        <c-settings-table/>
      </div>
    </div>

    <!--Modal-->
    <b-modal size="lg" hide-footer hide-header id="modal-change-wallet" ref="modal-change-wallet">
      <div class="с-modal">
        <div class="с-modal-body">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="с-modal-title">Реквизиты</h2>
            <div class="d-flex align-items-center">
              <c-button @click="$bvModal.hide('modal-change-wallet')" class="settings-payment__change btn-small btn-color-grey">
                Отменить
              </c-button>
              <c-button @click="$bvModal.hide('modal-add-wallet')" class="settings-payment__edit btn-small">
                Сохранить
              </c-button>
            </div>
          </div>
          <div class="settings-payment">
            <c-settings-payment :disabled="false"/>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal size="lg" hide-footer hide-header id="modal-add-wallet" ref="modal-add-wallet">
      <div class="с-modal">
        <div class="с-modal-body">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="с-modal-title">Реквизиты</h2>
            <div class="d-flex align-items-center">
              <c-button @click="$bvModal.hide('modal-add-wallet')" class="settings-payment__change btn-small btn-color-grey">
                Отменить
              </c-button>
              <c-button @click="$bvModal.hide('modal-add-wallet')" class="settings-payment__edit btn-small">Сохранить</c-button>
            </div>
          </div>
          <div class="settings-payment">
            <c-settings-payment :disabled="false"/>
          </div>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>

import CButton from '@/components/UI/c-button';
import CInput from "@/components/UI/c-input";
import CSettingMain from "@/components/settings/c-settings-main";
import CSettingsPayment from "@/components/settings/c-settings-payment";
import CSettingsPassword from "@/components/settings/c-settings-password";
import CSettingsTable from "@/components/settings/c-settings-table";


export default {
  components: {CButton, CInput, CSettingMain, CSettingsPayment, CSettingsPassword, CSettingsTable},
  methods: {
    goto(reference) {
      let element = this.$refs[reference];
      let top = element.offsetTop - 110;
      window.scrollTo(0, top);
    },

    toggleModal() {
      this.$refs['modal-change-wallet'].toggle()
    },
  }

}
</script>

<style lang="scss">

.с-overlay {
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  top: 0;

  .с-modal {
    border-radius: 15px;
    padding: 30px;
    position: relative;
    margin: 0 auto;
    max-width: 870px;
    min-height: 30%;
    z-index: 99999;

    background-color: white;
    top: 30%;
  }
}

.с-modal-title {
  font-weight: 600;
  font-size: 24px;
}

.с-overlay.active {
  display: block !important;
}

</style>