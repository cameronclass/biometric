<template>
  <div class="container-fluid wallet">
    <div class="row">
      <div class="col-lg-4">
        <div class="card p-4">
          <div class="wallet__balance">
            <h3 class="main-title">Баланс</h3>
            <div class="wallet__balance_value">
              00,0$
            </div>
            <div class="wallet__balance_add">
              <c-button class="w-100">Пополнить баланс</c-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card p-4 h-100">
          <div class="wallet__declined">
            <c-wallet-declined/>
          </div>
        </div>
      </div>
      <div class="col-lg-12 my-5">
        <div class="card p-4">
          <div class="wallet__accepted">
            <c-wallet-accepted/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CButton from '@/components/UI/c-button';
import CWalletDeclined from '@/components/wallet/c-wallet-declined';
import CWalletAccepted from '@/components/wallet/c-wallet-accepted';

export default {
  name: "StaticList",
  components: {CButton, CWalletDeclined, CWalletAccepted},
}
</script>

<style>

</style>