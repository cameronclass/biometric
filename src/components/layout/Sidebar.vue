<template>
  <nav class="sidebar" :class="{open: value}">
    <ul class="sidebar__list sidebar__list_left">
      <li class="sidebar__item">
        <button class="sidebar__btn" v-b-toggle.collapse-1>
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/static.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Статисктика</span>
          <img
            class="sidebar__btn_arrow"
            src="../../assets/img/icons/arrow-left.svg"
            alt=""
          />
        </button>
        <b-collapse id="collapse-1" class="sidebar__dropdown">
          <router-link class="sidebar__dropdown_link" to="/dashboard/static"
            >Статисктика</router-link
          >
          <router-link
            class="sidebar__dropdown_link"
            to="/dashboard/static-list"
            >Список транзакции</router-link
          >
        </b-collapse>
      </li>
      <li class="sidebar__item">
        <button class="sidebar__btn" v-b-toggle.collapse-2>
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/technology.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Технологии</span>
          <img
            class="sidebar__btn_arrow"
            src="../../assets/img/icons/arrow-left.svg"
            alt=""
          />
        </button>
        <b-collapse id="collapse-2" class="sidebar__dropdown">
          <router-link class="sidebar__dropdown_link" to="/dashboard/technology"
            >Технологии</router-link
          >
          <router-link
            class="sidebar__dropdown_link"
            to="/dashboard/history-flow"
            >История flow</router-link
          >
        </b-collapse>
      </li>
      <li class="sidebar__item">
        <router-link to="/dashboard/wallet" class="sidebar__link">
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/wallet.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Счета и оплата</span>
        </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/dashboard/document" class="sidebar__link">
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/document.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Документации</span>
        </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/dashboard/help" class="sidebar__link">
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/help.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Поддержка</span>
        </router-link>
      </li>
      <li class="sidebar__item">
        <router-link to="/dashboard/settings" class="sidebar__link">
          <img
            class="sidebar__btn_icon"
            src="../../assets/img/icons/nav/setting.svg"
            alt=""
          />
          <span class="sidebar__btn_text">Настройки</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Sidebar",
  props: ['value'],
  methods: {},
};
</script>
