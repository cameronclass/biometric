<template>
  <div class="c-login">

    <router-link to="/" class="go-back">
      <img class="go-back__icon" src="@/assets/img/icons/arrow-left.svg" alt="">
      <span class="go-back__text">Назад</span>
    </router-link>

    <h2 class="register__title">Восстановление пароля</h2>

    <p class="register__subtitle">
      <span>Вы еще не зарегистрировались? </span>
      <router-link class="register__subtitle_link" to="/register">Создать учетную запись</router-link>
    </p>

    <form @submit.prevent="login" method="post">

      <div class="register-form register-form__login">

        <c-input
            class="register-form__input"
            type="text"
            label="Имя пользователя"
            placeholder="Имя пользователя"
            v-model="form.username"
            :rules="rules.required"
            name="username"
            :error="errors.username"
        />

        <c-input
            class="register-form__input"
            type="email"
            label="Почта"
            placeholder="email@company.com"
            v-model="form.email"
            :rules="rules.required"
            name="email"
            :error="errors.email"
        />

      </div>


      <c-button type="submit" class="register-form__btn">
        Продолжить
      </c-button>

    </form>

  </div>
</template>

<script>

import CInput from "@/components/UI/c-input";
import CButton from "@/components/UI/c-button";

export default {
  name: "c-password",
  components: { CButton, CInput },

  data () {
    return {
      rules: {
        required(value, label) {
          if (value.trim() === "") {
            return {
              validated: false,
              message: "Поле должно быть заполненно"
            }
          }
          return {
            validated: true,
            message: null
          }
        },
        email(value, label) {
          const r = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
          if (!r.test(value)) {
            return {
              validated: false,
              message: "Поле должно быть валидным в формате email@company.com"
            }
          }
          return {
            validated: true,
            message: null
          }
        },
      },
      errors: [],
      form: {
        email: "",
        username: "",
      },
    }
  },

  methods: {
    login(){
      this.errors = [];
      this.check();
    },
    check() {
      for (const [key, item] of Object.entries(this.form)) {
        if (this.rules.required(item, key).validated === false){}
        this.errors[key] = this.rules.required(item, key).message
      }
      return this.errors.length === 0
    },
  },
}


</script>

<style lang="scss">

</style>