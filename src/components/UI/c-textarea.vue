<template>

  <ValidationProvider v-slot="{ errors }">
    <label class="form__control">
      <span class="form__label">{{ label }}*</span>
      <textarea class="form__input" rows="5" :required="required" :value="content" @blur="blur" @input="handle"
                :placeholder="placeholder"
                :name="name"></textarea>
      <span class="form__error" v-if="message">{{ message }}</span>
    </label>
  </ValidationProvider>

</template>

<script>
import {ValidationProvider} from 'vee-validate';
export default {
  name: "c-textarea",
  components: {ValidationProvider},
  props: {
    name: {
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
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>