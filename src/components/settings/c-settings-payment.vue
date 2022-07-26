<template>
  <div class="row mt-4">
    <div class="col-lg-6">
      <c-bankcart
          label="Платёжная карта: Visa"
          img="visa"
          @input="change"
          :disabled="disabled"

      />
    </div>
    <div class="col-lg-6">
      <c-bankcart
		      @input="change"

		      label="Платёжная карта: Mastercard"
          :disabled="disabled"
          img="mastercard"
      />
    </div>
  </div>
</template>

<script>
import CInput from '@/components/UI/c-input';
import CBankcart from "@/components/UI/c-bankcart";

export default {
  name: "c-settings-payment",
	props: {
		disabled: {
			type: Boolean,
			required: false,
			default: true
		}
	},
  components: {CInput, CBankcart},

	method:{
		changeVisa(event){
			this.$emit('input', event)
		},
		changeMaster(event){
			this.$emit('input', event)
		},
	}
}
</script>

<style scoped>

</style>