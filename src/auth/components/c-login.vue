<template>
  <div class="c-login">

    <router-link to="/" class="go-back">
      <img class="go-back__icon" src="@/assets/img/icons/arrow-left.svg" alt="">
      <span class="go-back__text">Назад</span>
    </router-link>

    <h2 class="register__title">Войдите в систему</h2>

    <p class="register__subtitle">
      <span>Вы еще не зарегистрировались? </span>
      <router-link class="register__subtitle_link" to="/register">Создать учетную запись</router-link>
    </p>

    <form @submit.prevent="login" method="post">

      <div class="register-form register-form__login">

        <c-input
            class="register-form__input"
            type="text"
            label="Почта"
            v-model="form.email"
            placeholder="email@company.com"
            :rules="[rules.required, rules.email]"
            name="email"
            :error="errors.email"
        />

        <c-input
            class="register-form__input"
            type="password"
            label="Пароль"
            :rules="rules.required"
            :error="errors.password"
            v-model="form.password"
            name="password"
        />

        <router-link class="register-form__password" to="password">Забыли пароль?</router-link>

      </div>


      <c-button type="submit" class="register-form__btn">
        Войти
      </c-button>

    </form>

  </div>
</template>

<script>

import CInput from "@/components/UI/c-input";
import CButton from "@/components/UI/c-button";

export default {
  name: "c-login",
  components: { CButton, CInput },

  data () {
    return {
      errors: [],
      rules: {
        required ( value, label ) {
          if ( value.trim() === "" ) {
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
        email ( value, label ) {
          const r = new RegExp( /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i );
          if ( !r.test( value ) ) {
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
      form: {
        email: "",
        password: "",
      },
    }
  },

  methods: {

    async login () {
      this.errors = [];
      if ( this.check() ) {
        await this.$store.dispatch( 'auth/login', this.form )
        const isLogged = await this.$store.getters['auth/isAuthenticated'];
        if ( isLogged )
          await this.$router.push( '/dashboard' );
      }
    },

    check () {
      for ( const [ key, item ] of Object.entries( this.form ) ) {
        if ( this.rules.required( item, key ).validated === false ) {
          this.errors[key] = this.rules.required( item, key ).message
        }
        if ( key === "email" && this.errors[key] === undefined ) {
          this.errors[key] = this.rules.email( item, key ).message
        }
      }
      return this.errors.length === 0
    },
  },

}


</script>

<style scoped>

</style>