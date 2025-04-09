<template>
  <the-header></the-header>
  <section class="sec-banner"></section>
  <div class="content"></div>
  <wave class="wave"></wave>
  <the-footer class="footer"></the-footer>
</template>

<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import Wave from '@/components/canvas/Wave.vue';
import TheFooter from '@/components/common/TheFooter.vue';
</script>

<style scoped>
.sec-banner {
  position: relative;
  width: 950px;
  height: 250px;
  margin: 0 auto;
  border-radius: 20px;
  background: url('@/assets/images/home/banner1.png') no-repeat center;
  background-size: contain;
  box-shadow: 0 12px 50px -30px rgb(0 0 0 / 60%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    width: 30px;
    height: 30px;
  }

  &::before {
    left: 10px;
    transform: rotateY(180deg);
    background: url('@/assets/images/icons/pin2.png') no-repeat center;
    background-size: contain;
  }

  &::after {
    right: 10px;
    background: url('@/assets/images/icons/pin1.png') no-repeat center;
    background-size: contain;
  }
}

.footer {
  position: fixed !important;
  bottom: 0;
  width: 100%;
}

.wave {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
}

@media (width <= 950px) {
  .sec-banner {
    width: 100%;
  }
}
</style>
