<template>
  <div class="container-fluid technology">
    <div class="card p-4">
      <div class="technology__add">
        <div class="technology__block mb-4">
          <h3 class="main-title">Доступные для подключения</h3>
          <div class="technology__button">
            <c-button class="btn-small">
              <i class="icon i-document-outlined"></i>
              <span>Создать flow</span>
            </c-button>
          </div>
        </div>
        <div class="technology__box">
          <form class="technology__form" action="#">
            <div
              class="technology__form_item"
              v-for="(item, key) in items"
              :key="`k_${key}`"
            >
              <c-techno-item
                @click="add"
                :color="item.color"
                :icon="item.icon"
                :text="item.text"
                :list="item.actions"
              >
              </c-techno-item>
            </div>
          </form>
        </div>
      </div>
      <div class="technology__list mt-5">
        <h3 class="main-title mb-4">Последовательность использования</h3>
        <div class="technology__box" v-if="usage_order.length === 0">
          <div class="technology__form_empty">
            <div
              class="technology__form_empty_item"
              v-for="item in 7"
              :key="item"
            >
              <span class="technology__form_empty_number">{{ item }}</span>
              <span class="technology__form_empty_text"
                >Последовательность</span
              >
            </div>
          </div>
        </div>
        <div class="technology__box" v-else>
          <draggable v-model="usage_order" class="technology__form">
            <div
              class="technology__form_item"
              v-for="(item, key) in usage_order"
              :key="`k_v_${key}`"
            >
              <c-techno-item
                :color="item.color"
                class="pointer"
                :icon="item.icon"
                :text="item.text"
                :list="item.actions"
              />
            </div>
          </draggable>
        </div>
      </div>
    </div>

    <div class="row align-items-stretch mt-4">
      <div class="col-lg-7">
        <div class="card p-4">
          <div class="technology__price">
            <div class="technology__price_title mb-4">
              <h4 class="main-title">Стоимость</h4>
              <div class="technology__price_title_tooltip">
                <router-link
                  to="/dashboard/document"
                  class="btn btn-small btn-color-grey"
                  id="technology__price_title"
                >
                  Детали
                </router-link>
                <b-tooltip target="technology__price_title" triggers="hover">
                  Ведет на страницу “Документации”
                </b-tooltip>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8">
                <div class="technology__box technology__price_table">
                  <h5 class="main-subtitle mb-4">Цена на услуги</h5>
                  <div class="technology__price_table_heading">
                    <span>Сессия</span>
                    <span>Цена</span>
                  </div>
                  <div class="technology__price_table_items">
                    <div
                      class="technology__price_table_item"
                      v-for="(item, key) in costs"
                      :key="`costs_${key}`"
                    >
                      <div class="technology__price_table_item_name">
                        <span class="circle" :class="item.color"></span>
                        <span>{{ item.text }}</span>
                      </div>
                      <div class="technology__price_table_item_price">
                        {{ item.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 d-flex align-items-center justify-content-center"
              >
                <div class="technology__price_final">
                  <span class="technology__price_final_text"
                    >Итоговая цена</span
                  >
                  <span class="technology__price_final_value">00.0$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card p-4 d-flex align-items-center h-100">
          <img
            class="technology__price_img"
            src="@/assets/img/image_133.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CButton from "@/components/UI/c-button";
import CTechnoItem from "@/components/UI/c-techno-item";
import draggable from "vuedraggable";

export default {
  name: "technology-index",
  components: {
    CButton,
    CTechnoItem,
    draggable,
  },

  data() {
    return {
      items: [
        {
          text: "Mobile Verification",
          color: "green",
          icon: "i-mobile",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "Data Save",
          color: "orange",
          icon: "i-database",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "Email Verification",
          color: "pink",
          icon: "i-email",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "AML Processing",
          color: "blue",
          icon: "i-aml",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "Liveness Detection",
          color: "purple",
          icon: "i-detection",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "Document Verification",
          color: "dark-blue",
          icon: "i-document-verification",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
        {
          text: "Face 2 Face",
          color: "dark-red",
          icon: "i-f2f",
          actions: [
            {
              icon: "i-plus",
              text: "Добавить",
            },
          ],
        },
      ],
      costs: [
        {
          color: "purple",
          text: "Liveness Detection",
          price: "00.0$",
        },
        {
          color: "blue",
          text: "Document Verification",
          price: "00.0$",
        },
        {
          color: "red",
          text: "Face 2 Face",
          price: "00.0$",
        },
        {
          color: "green",
          text: "Mobile Verification",
          price: "00.0$",
        },
        {
          color: "orange",
          text: "Data Save",
          price: "00.0$",
        },
        {
          color: "pink",
          text: "Email Verification",
          price: "00.0$",
        },
        {
          color: "light-blue",
          text: "AML Processing",
          price: "00.0$",
        },
      ],
      usage_order: [],
    };
  },
  methods: {
    create() {
      this.usage_order = this.items;
    },
    add(text) {
      const index = this.usage_order.findIndex((elem) => elem.text === text);
      if (index === -1) {
        const currentFromOrigin = this.items.filter(
          (elem) => elem.text === text
        )[0];
        this.usage_order.push(currentFromOrigin);
      }
    },
  },
};
</script>
