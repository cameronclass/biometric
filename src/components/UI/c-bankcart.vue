<template>

  <ValidationProvider v-slot="{ errors }">
    <label class="form__control">
      <span class="form__label">{{ label }}*</span>
      <img class="form__img" :src="require(`@/assets/img/icons/${img}.svg`)" alt="">
      <input class="form__input form__input_cart" :disabled="disabled" v-mask="'#### #### #### ####'" :required="required" :value="content" @blur="blur" @input="handle"
             :type="type" :placeholder="placeholder"
             :name="name">
      <span class="form__error" v-if="message">{{ message }}</span>
    </label>
  </ValidationProvider>


</template>

<script>

import {ValidationProvider} from 'vee-validate';
import {mask} from 'vue-the-mask';

export default {
  name: "c-bankcart",
  components: {ValidationProvider},
  directives: {mask},
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
      type: Function | Object | Array,
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
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: [String, Object, Number],
      required: false
    },
	  disabled: {
		  type: Boolean,
		  default: true,
		  required: false
	  },
    img: {
      type: String
    }
  },
  data() {
    return {
      content: this.value,
      message: null | this.error
    }
  },

  watch: {
    error(messages) {
      if (messages) {
        if (messages instanceof Array) {
          for (const [key, message] of messages) {
            this.message = message.replace(this.name, this.label)
            break;
          }
        }
        this.message = messages.replace(this.name, this.label.toLowerCase())
      }

    }

  },
  methods: {

    handle(event) {
      this.content = event.target.value
      this.$emit('input', this.content)

    },

    blur() {
      if (this.rules instanceof Array) {
        for (const item of this.rules) {
          if (this.check(item) === false) {
            break
          }
        }
        return false;
      }
      return this.check(this.rules)


    },
    check(rule) {
      if (typeof rule === "function") {
        const response = rule(this.content, this.label);
        if (!response.validated) {
          this.message = response.message
        } else {
          this.message = null
        }
        return this.message === null;
      }
      if (typeof rule === "object") {
        if (!rule.validated) {
          this.message = rule.message
        } else {
          this.message = null
        }
        return this.message === null;
      }
    },

  },
  computed: {}
}
</script>

<style scoped>

</style>