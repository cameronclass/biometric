<template>
	<div class="c-register">

		<router-link to="/" class="go-back">
			<img class="go-back__icon" src="@/assets/img/icons/arrow-left.svg" alt="">
			<span class="go-back__text">Назад</span>
		</router-link>

		<h2 class="register__title">Создайте учетную запись</h2>

		<p class="register__subtitle">
			<span>У вас уже есть учетная запись? </span>
			<router-link to="login" class="register__subtitle_link">Войти</router-link>
		</p>

		<form @submit.prevent="apply" method="post">

			<div class="register-form">

				<c-input
						class="register-form__input"
						type="text"
						label="Имя"
						placeholder="Иван"
						v-model="form.first_name"
						:rules="rules.required"
						name="first_name"
						:error="errors.first_name"
				/>

				<c-input
						class="register-form__input"
						type="text"
						label="Фамилия"
						placeholder="Иванов"
						v-model="form.last_name"
						name="last_name"
						:error="errors.last_name"
				/>

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

				<c-input
						class="register-form__input"
						type="text"
						v-model="form.organization_id"
						:rules="rules.required"
						:error="errors.organization_id"
						disabled="disabled"
						label="Название компании"
						placeholder="Biometric"
						name="organization_id"
				/>


				<c-input
						class="register-form__input"
						type="text"
						label="Пароль"
						:rules="[rules.required, rules.validatePassword.apply(this)]"
						:error="errors.password"
						v-model="form.password"
						name="password"
				/>

				<c-input
						class="register-form__input"
						type="password"
						label="Подтвердите пароль"
						:rules="[rules.required, rules.confirm.apply(this)]"
						v-model="form.repeat_password"
						name="repeat_password"
						:error="errors.repeat_password"
				/>

			</div>

			<ul class="password-advise">
				<p class="password-advise__title">Придумайте пароль:</p>
				<li class="password-advise__item">Не короче 8 букв и цифр,</li>
				<li class="password-advise__item">Не используйте личные данные, последовательность
					<br> (123456, qwerty) и популярные пароли (password)
				</li>
			</ul>

			<c-button type="submit" class="register-form__btn">
				Регистрация
			</c-button>

			<div class="register-form__copyright">
				<p>Нажимая на кнопку вы соглашаетесь с <br> <a href="#">Политикой конфиденциальности</a></p>
			</div>

		</form>

	</div>
</template>

<script>
import CInput from "@/components/UI/c-input";
import CButton from "@/components/UI/c-button";
import CPhone from "@/components/UI/c-phone";
import { v4 as uuidv4 } from 'uuid';

export default {
	name: "c-register",
	components: {CButton, CInput, CPhone},
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
					if (this.form.password === this.form.repeat_password) {
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
				first_name: "",
				last_name: "",
				email: "",
				phone: "",
				password: "",
				repeat_password: "",
				role_code: "",
				organization_id: uuidv4(),
			},
			errors: [],
		}
	},

	async mounted() {
		await this.axios.get('/roles/').then(({data}) => {
			this.$store.dispatch('auth/roles', {roles: data, default: (data.find(item => item.code === "admin"))?.code});
		}).catch(e => console.log(e));
		this.form.role_code = await this.$store.getters['auth/defaultRole'];

	},
	methods: {
		async apply() {


				await this.axios.post('auth/register/', this.form).then(({data}) => {
					console.log(data)
				}).catch(({response: {data}}) => {
					this.errors = data
				})

		},
		// cdscdscds@dscds.cdscsd
		// 98YtNebtJqsdDbnL!32
		check() {
			this.errors = [];
			const e = [];
			for (const [key, item] of Object.entries(this.form)) {
				if (this.rules.required(item, key).validated === false)
					this.errors[key] = this.rules.required(item, key).message
				e.push(this.rules.required(item, key).message)
			}
			console.log(e)
			return e.length === 0
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

<style lang="scss">

</style>