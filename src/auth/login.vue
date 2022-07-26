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
            <img src="@/assets/img/register/2.png" alt="">
          </div>
        </div>
        <div class="register__form">
          <div class="register__form_content">
            <Login/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Login from "@/auth/components/c-login";

export default {
  name: "login",
  components: { Login },
  metaInfo: {
    title: 'Login | BIOMETRIC'
  }
}
</script>

<style scoped>

</style>