<template>
	<div class="c-table">
		<div class="row align-items-center c-table__header">
			<div v-for="(header, key) in items" :class="header.column" :key="`${key}_c_table`">
				<div class="c-table-th" @click="order(header.ordered, header.key)" :class="header.ordered ? 'pointer' : ''">
					{{ header.name }}
					<i v-if="header.ordered" class="ml-1 i-arrows"></i>
				</div>
			</div>


		</div>
		<div v-for="(row, k) in origin_rows" :key="`row_${k}`" :class="k % 2 === 0 ? '_main-bg' : ''"
		     class="c-table_row row align-items-center">

			<div v-for="(header, key) in items" :class="header.column" :key="`row_column_${key}`">

				<div class="c-table-tr" v-if="row[header.key] && !header.offset" :class="row[header.key].tr_classes">
					<div v-for="(rowItem, rowItemKey) in row[header.key].items"
					     :class="rowItem.type === 'button' ? 'c-table__button' : ''" :key="`row_item_${rowItemKey}`">
						<span v-if="rowItem.type === 'text'">{{ rowItem.text }}</span>

						<b-button v-if="rowItem.type === 'button'" @click="rowItem.click" :class="rowItem.classes.join(' ')"
						          :id="`tooltip_${rowItem.name+ '_v_' + key}_${k}_row_item_${rowItemKey}`">
							<i v-if="rowItem.icon" :class="rowItem.icon"></i>
							<span v-else-if="rowItem.text">{{ rowItem.text }}</span>
						</b-button>
						<b-tooltip v-if="rowItem.tooltip && rowItem.type === 'button'" custom-class="small-tooltip"
						           :target="`tooltip_${rowItem.name+ '_v_' + key}_${k}_row_item_${rowItemKey}`" triggers="hover">
							{{ rowItem.tooltip }}
						</b-tooltip>

					</div>
				</div>

			</div>
		</div>
		<div class="c-table-pagination">
			<button class="c-table-pagination__button c-table-pagination__button_left" :disabled="prevDisabled" @click="prev">
				<i class="i-table-paginate-left"></i>
				<span>Предыдущая</span>
			</button>
			<ul class="c-table-pagination__list">
				<li class="c-table-pagination__list__item" v-for="(item, key) in pagination"
				    :class="currentPage === item ? 'active' : ''" :key="`list_item_${key}`">
					{{ item }}
				</li>
			</ul>

			<button class="c-table-pagination__button c-table-pagination__button_right" :disabled="nextDisabled"
			        @click="next">
				<span>Следующая</span>
				<i class="i-table-paginate-right"></i>

			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "c-table",

	props: {
		data: Array,
		rows: Array,
		showPagination: {
			default: true,
			type: Boolean,
			required: false,
		},

		perPage: {
			type: Number,
			required: false,
			default: 1,
		},
		delimiterPage: {
			type: String,
			required: false,
			default: '...',
		},
		total: {
			type: Number,
			required: false,
			default: 50,
		}
	},
	data() {
		return {
			items: [],
			body: [],
			pagination: [],
			totalPages_pre: 0,
			totalPages: 0,
			currentPage: 1,
			prevDisabled: false,
			nextDisabled: false,
			origin_rows: [],
			orderByAsc: false,
			orderByName: null,
		}
	},
	mounted() {
		const items = this.data
		this.origin_rows = this.rows
		this.generatePage();

		if (items) {
			items.forEach(item => {
				let i = {
					name: item.header,
					key: item.item_key,
					column: item.column,
					ordered: item.ordered,
					data: item.data,
					offset: null,
					tr_classes: item.tr_classes,
					disable_show_in_offset: item?.disable_show_in_offset ?? true
				}
				if (item.column) {
					this.items.push(i)
				}
				if (item.offset) {
					i = {
						offset: true,
						name: null,
						key: item.item_key,
						column: item.offset,
						ordered: false,
						data: item.data,
						tr_classes: item.tr_classes,
						disable_show_in_offset: item?.disable_show_in_offset ?? true

					}

					this.items.push(i)
				}

			})

		}

	},
	methods: {

		generatePage() {
			this.pagination = [];
			this.totalPages_pre = (this.total / this.perPage)
			this.totalPages = (this.total % this.perPage) === 0 ? this.totalPages_pre : this.totalPages_pre + 1
			this.disableButton()

			let i = 1;

			while (i <= this.totalPages) {
				if (i <= 3 || //the first three pages
						i >= this.totalPages - 2 || //the last three pages
						i >= this.currentPage - 1 && i <= this.currentPage + 1) { //the currentPage, the page before and after
					this.pagination.push(i);
					i++;
				} else { //any other page should be represented by ...
					this.pagination.push(this.delimiterPage);
					//jump to the next page to be linked in the navigation
					i = i < this.currentPage ? this.currentPage - 1 : this.totalPages - 2;
				}
			}

		},

		prev() {
			this.currentPage = (this.currentPage - 1) <= 0 ? 1 : this.currentPage - 1;
			this.disableButton()
			this.generatePage()
		},
		disableButton() {
			this.prevDisabled = (this.currentPage - 1) <= 0;
			this.nextDisabled = (this.currentPage >= this.totalPages);
		},
		next() {

			if (this.currentPage < this.totalPages) {
				this.currentPage = this.currentPage + 1
			}
			this.disableButton()

			this.generatePage()
		},

		order(ordered = false, key) {

			if (ordered) {

				this.orderByName = key;

					this.origin_rows.sort((a, b) => {
						let x = a[key].items[0]['text']
						let y = b[key].items[0]['text']

						return ((x < y) ? -1 : ((x > y) ? 1 : 0));
					});
					this.orderByAsc = false


			}
		}
	}

}
</script>

<style scoped lang="scss">
.c-table-th {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

</style>