<template>
  <header class="header container-fluid">
    <div class="header__block">
      <div class="header__logo">
        <router-link to="/">
          <img src="../../assets/img/logo-dark.svg" alt="" />
        </router-link>
        <button class="header__openmenu" @click="toogleMenu" :class="{ open: value }">
          <img
            class="header__logo_icon"
            src="../../assets/img/icons/arrow-left.svg"
            alt=""
          />
        </button>
      </div>
      <div class="header__nav">
        <div class="header__welcome">
          <div class="header__welcome_workers">
            <div class="header__welcome_img">
              <img src="../../assets/img/template/User.png" alt="" />
              <img src="../../assets/img/template/User.png" alt="" />
              <img src="../../assets/img/template/User.png" alt="" />
            </div>
            <span class="header__welcome_workers_text">Сотрудники</span>
          </div>
          <h3 class="header__welcome_text">Добро пожаловать, Имя</h3>
        </div>
        <div class="header__control">
          <router-link to="/dashboard/wallet" class="header__balance">
            <span class="header__balance_value">0.00$</span>
            <span class="header__balance_text">Баланс</span>
          </router-link>

          <div class="header__notification">
            <button>
              <img src="../../assets/img/icons/bell.svg" alt="" />
            </button>
          </div>

          <div class="header__profile">
            <img
              class="header__profile_img"
              src="../../assets/img/template/User.png"
              alt=""
            />
            <div class="header__profile_block">
              <div class="header__profile_name">Company name</div>
              <div class="header__profile_position">Position</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
  props: ["value"],
  components: {},
  computed: {},
  methods: {
    toogleMenu() {
      this.$emit("menu");
    },
  },
};
</script>
