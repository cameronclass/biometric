<template>

	<ValidationProvider v-slot="{ errors }">
		<label class="form__control">
			<span class="form__label">{{ label }}*</span>
			<input class="form__input" :value="content" @keydown="onPhoneKeyDown" @paste="onPhonePaste" @input="onPhoneInput"
			       :type="type"
			       :placeholder="placeholder" :name="name">
			<span class="form__error" v-if="message">{{ message }}</span>
		</label>
	</ValidationProvider>

</template>

<script>
import {ValidationProvider, extend} from 'vee-validate';

export default {
	name: "c-input",
	components: {ValidationProvider},
	props: {
		name: {
			type: [String, Number],
			required: true,
		},
		type: {
			type: [String, Number],
			required: true,
		},
		value: {
			type: [String, Number],
			required: false,
		},
		rules: {
			type: Function,
			required: false,

		},
		label: {
			type: [String, Number],
			required: true,
		},
		placeholder: {
			type: [String, Number],
			required: false,
		},
		error: {
			type: [String, Object, Number, Array],
			required: false
		}
	},
	data() {
		return {
			content: this.value,
			message: null
		}
	},
	watch: {
		error(messages) {
			if (messages) {
				if (messages instanceof Array) {
					for (const message of messages) {
						this.message = message.replace(this.name, this.label)
						break;
					}
				} else {
					this.message = messages.replace(this.name, this.label.toLowerCase())
				}
			}

		}

	},
	methods: {

		onPhonePaste(e) {
			var input = e.target,
					inputNumbersValue = this.getInputNumbersValue(input);
			var pasted = e.clipboardData || window.clipboardData;
			if (pasted) {
				var pastedText = pasted.getData('Text');
				if (/\D/g.test(pastedText)) {
					// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
					// formatting will be in onPhoneInput handler
					this.content = inputNumbersValue;
					return;
				}
			}
		},
		onPhoneInput(e) {

			let input = e.target,
					inputNumbersValue = this.getInputNumbersValue(e.target.value),
					selectionStart = input.selectionStart,
					formattedInputValue = "";

			if (inputNumbersValue === "") {
				return this.content = "";
			}

			if (e.target.value.length !== selectionStart && selectionStart !== null) {
				// Editing in the middle of input, not last symbol
				if (e.data && /\D/g.test(e.data)) {
					// Attempt to input non-numeric symbol
					this.content = inputNumbersValue;
				}
				return;
			}


			if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
				if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
				let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
				formattedInputValue = input.value = firstSymbols + " ";
				if (inputNumbersValue.length > 1) {
					formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
				}
				if (inputNumbersValue.length >= 5) {
					formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
				}
				if (inputNumbersValue.length >= 8) {
					formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
				}
				if (inputNumbersValue.length >= 10) {
					formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
				}
			} else {
				formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
			}
			this.content = formattedInputValue;
		},
		onPhoneKeyDown(e) {
			// Clear input after remove last symbol
			let inputValue = e.target.value.replace(/\D/g, '');
			if (e.keyCode === 8 && inputValue.length === 1) {
				this.content = "";
			}
		},
		getInputNumbersValue(value) {

			// Return stripped input value — just numbers
			return value.replace(/\D/g, '');
		},
		blur() {
			const response = this.rules(this.content, this.label);
			if (!response.validated) {
				this.message = response.message
			} else {
				this.message = null
			}
		},
	},
	computed: {}
}
</script>

<style scoped>

</style>