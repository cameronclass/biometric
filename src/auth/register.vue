<template>

  <div class="register__bg">
    <div class="container">
      <div class="register">
        <div class="register__info">
          <div class="register__logo">
            <img class="register__logo_img" src="@/assets/img/register/logo.svg" alt="">
            <p class="register__logo_text">The future is open</p>
          </div>
          <div class="register__img">
            <img src="@/assets/img/register/1.png" alt="">
          </div>
        </div>
        <div class="register__form">
          <div class="register__form_content">
            <Register/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Register from "./components/c-register";

export default {
  name: "register",
  components: { Register },
  metaInfo: {
    title: 'Register | BIOMETRIC'
  }
}
</script>

<style lang="scss">

</style>