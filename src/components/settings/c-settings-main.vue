<template>
  <div class="row">
    <div class="col-lg-6 mb-3">
      <c-input
          type="text"
          label="Имя"
          placeholder="Иван"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          type="text"
          label="Логин"
          placeholder="Ivan"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          label="Фамилия"
          placeholder="Иванов"
          v-model="form.lastname"
          name="lastname"
          :error="errors.lastname"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="email"
          label="Почта"
          placeholder="email@company.com"
          name="email"
          :rules="rules.email"
          v-model="form.email"
          :error="errors.email"


      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          label="Должность"
          placeholder="Дизайнер"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-phone
          class="register-form__input"
          type="text"
          label="Номер"
          :rules="rules.required"
          placeholder="+7 922 111 05 00"
          name="phone"
          v-model="form.phone"
          :error="errors.phone"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          v-model="form.country"
          label="Страна"
          :rules="rules.required"
          :error="errors.country"
          placeholder="Введите название страны"
          name="country"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          v-model="form.company"
          :rules="rules.required"
          :error="errors.company"
          label="Город"
          placeholder="Чирчик"
          name="company"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          label="Веб-сайт"
          placeholder="https://your.website.name.com"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
    <div class="col-lg-6 mb-3">
      <c-input
          class="register-form__input"
          type="text"
          label="Часовой пояс"
          placeholder="GMT +5"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
    <div class="col-lg-12 mb-3">
      <c-textarea
          class="register-form__input"
          label="О себе"
          placeholder="Пример описания"
          v-model="form.firstname"
          :rules="rules.required"
          name="firstname"
          :error="errors.firstname"
      />
    </div>
  </div>
</template>

<script>
import CButton from "@/components/UI/c-button";
import CInput from "@/components/UI/c-input";
import CPhone from "@/components/UI/c-phone";
import CTextarea from "@/components/UI/c-textarea";


export default {
  name: "c-setting-main",
  components: {CButton, CInput, CPhone, CTextarea},
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
        email(value, label) {
          const r = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
          if (!r.test(value)) {
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
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        country: "",
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