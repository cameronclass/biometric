<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-lg-3">
        <c-card color="rgba(151, 25, 250, 0.2)" title="Liveness Detection" img="icons/detection.svg" value="00.0"/>
      </div>
      <div class="col-lg-3">
        <router-link to="face-to-face">
          <c-card color="rgba(250, 25, 25, 0.2)" title="Face 2 Face" img="icons/f2f.svg" value="00.0"/>
        </router-link>
      </div>
      <div class="col-lg-3">
        <c-card color="rgba(25, 74, 250, 0.2)" title="Document Verification" img="icons/document-verification.svg"
                value="00.0"/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3">
        <c-card color="rgba(29, 250, 25, 0.2)" title="Mobile Verification" img="icons/mobile.svg" value="00.0"/>
      </div>
      <div class="col-lg-3">
        <c-card color="rgba(250, 25, 200, 0.2)" title="Email Verification" img="icons/email.svg" value="00.0"/>
      </div>
      <div class="col-lg-3">
        <c-card color="rgba(25, 236, 250, 0.2)" title="AML Processing" img="icons/aml.svg" value="00.0"/>
      </div>
      <div class="col-lg-3">
        <c-card color="rgba(250, 160, 25, 0.2)" title="Data Save" img="icons/database.svg" value="00.0"/>
      </div>
    </div>

  </div>
</template>

<script>

import CCard from '@/components/c-card';

export default {
  name: 'documentation',
  components: {CCard},
}

</script>
