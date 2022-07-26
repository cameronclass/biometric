<template>
  <div class="app">
    <Header v-model="open" @menu="open = !open" />

    <div class="d-flex align-content-stretch">
      <Sidebar v-model="open" />

      <div class="main-content mt-4 mb-5">
        <router-view class="view"></router-view>
        <Footer  v-model="open" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "mainpage",
  data: () => {
    return {
      open: true,
    };
  },
  components: {
    Header,
    Sidebar,
    Footer,
  },
  methods: {
    changeVisible(){
      this.show == false;
    }
  }
};
</script>
