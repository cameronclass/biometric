<template>
	<div class="technology__item" :class="color">
		<div class="technology__item_icon">
			<i :class="icon"></i>
		</div>
		<div class="technology__item_text">
			{{ text }}
		</div>
		<div class="technology__item_action showList" @click="show">
			<i :class="actionIcon" class="showList"></i>
			<div class="technology__item_action_content" :class="hidden ? '' : 'active'">
				<div class="technology__item_action_list" v-for="item in list">
					<span @click="select(text)" class="technology__item_action_icon"><i :class="item.icon"></i></span>
					<span @click="select(text)" class="technology__item_action_text" :class="item.color ? item.color : '_black'">
            {{ item.text }}
          </span>
				</div>
			</div>
		</div>
	</div>
	<!--	<div class="c-techno-item" :class="color">-->
	<!--		<div class="c-techno-item__content">-->
	<!--			<div class="d-flex align-items-center">-->
	<!--				<div class="c-techno-item__icon ">-->
	<!--					<i :class="icon"></i>-->
	<!--				</div>-->
	<!--				<div class="c-techno-item__icon__text">-->
	<!--					{{ text }}-->
	<!--				</div>-->
	<!--			</div>-->
	<!--			<div class="c-techno-item__icon_action" @click="show">-->
	<!--        <i :class="actionIcon"></i>-->
	<!--      </div>-->
	<!--		</div>-->
	<!--		<div class="c-techno-item__list" :style="styles" :class="hidden ? '' : 'active'">-->
	<!--			<div @click="select" class="c-techno-item__list_item" v-for="item in list">-->
	<!--				<span class="c-techno-item__list__item__icon"><i :class="item.icon"></i></span>-->
	<!--				<span class="c-techno-item__list__item__text" :class="item.color ? item.color : '_black'">{{ item.text }}</span>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</div>-->
</template>


<script>
export default {
	name: "c-techno-item",
	props: {
		icon: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: false,
			default: "green"
		},
		text: {
			type: String,
			required: true,
		},
		actionIcon: {
			type: String,
			required: false,
			default: 'i-list'
		},


		list: {
			type: Array,
			required: false,
			default: null
		}

	},

	data() {
		return {
			hidden: true,
		}
	},

	methods: {
		show(e) {
			if (this.hidden === false && e.target.classList.contains('showList')) {
				return this.hidden = true;
			} else if (this.hidden === false && !e.target.classList.contains('showList')) {
				return this.hidden = false;
			} else if (this.hidden === true && e.target.classList.contains('showList')) {
				return this.hidden = false;

			}
		},
		select(text) {
			this.hidden = true;
			return this.$emit('click', text)
		}
	}
}
</script>

