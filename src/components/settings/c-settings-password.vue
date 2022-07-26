<template>
  <div>
    <div class="row mt-4">
      <div class="col-lg-6">
        <c-input
            class="register-form__input"
            type="text"
            label="Теккущий пароль"
            placeholder="Введите текущий пароль"
            :rules="[rules.required]"
            :error="errors.password"
            v-model="form.password_old"
            name="password"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-6">
        <c-input
            class="register-form__input"
            type="text"
            label="Придумайте новый пароль"
            placeholder="Введите новый пароль"
            :rules="[rules.required, rules.validatePassword.apply(this)]"
            :error="errors.password"
            v-model="form.password"
            name="password"
        />
      </div>
      <div class="col-lg-6">
        <c-input
            class="register-form__input"
            type="password"
            label="Подтвердите новый пароль"
            placeholder="Введите новый пароль"
            :rules="[rules.required, rules.confirm.apply(this)]"
            v-model="form.password_confirm"
            name="password_confirm"
            :error="errors.password_confirm"
        />
      </div>
    </div>
    <ul class="password-advise mt-4">
      <p class="password-advise__title">Придумайте пароль:</p>
      <li class="password-advise__item">Не короче 8 букв и цифр,</li>
      <li class="password-advise__item">Не используйте личные данные, последовательность
        <br> (123456, qwerty) и популярные пароли (password)
      </li>
    </ul>
  </div>

</template>

<script>
import CInput from '@/components/UI/c-input';

export default {
  name: "c-settings-password",
  components: {CInput},
  data() {
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
        validatePassword() {
          this.checkPassword(this.form.password)
          if (this.valid_password === false) {
            return {
              validated: false,
              message: "Пароль должен быть не короче 8 букв и цифр и должен содержать один из спец. символы !@#$%^&*()_+.,"
            }
          }
          return {
            validated: true,
            message: null
          }
        },
        confirm() {
          if (this.form.password === this.form.password_confirm) {
            return {
              validated: true,
              message: null
            }
          }
          return {
            validated: false,
            message: "Пароли не совпадают",
          }
        },
      },
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false,
      form: {
        password_old: "",
        password: "",
        password_confirm: "",
      },
      errors: [],
    }
  },
  methods: {
    apply() {
      this.errors = [];
      this.check()
    },
    check() {
      for (const [key, item] of Object.entries(this.form)) {
        if (this.rules.required(item, key).validated === false)
          this.errors[key] = this.rules.required(item, key).message
      }
      return this.errors.length === 0
    },
    checkPassword(password) {
      this.password_length = password.length;
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (this.password_length >= 8) {
        this.contains_eight_characters = true;
      } else {
        this.contains_eight_characters = false;
      }
      this.contains_number = /\d/.test(password);
      this.contains_uppercase = /[A-Z]/.test(password);
      this.contains_special_character = format.test(password);
      if (this.contains_eight_characters === true &&
          this.contains_special_character === true &&
          this.contains_uppercase === true &&
          this.contains_number === true) {
        return this.valid_password = true;
      }
      return this.valid_password = false;
    }
  },
}
</script>

<style scoped>

</style>