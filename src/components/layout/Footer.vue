<template>
  <footer class="container-fluid main-footer" :class="{ open: value }">
    <p class="main-footer__text">© 2022 BIOMETRIC.KZ - ALL RIGHTS RESERVED</p>
  </footer>
</template>

<script>
export default {
  name: "footerpage",
  props: ["value"],
};
</script>
