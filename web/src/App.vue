<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { provide } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

const { userAgent } = window.navigator;
const isAndroid = userAgent.indexOf('Android') >= 0;
// const isIPad = userAgent.indexOf('iPad') >= 0;
const isIPhone = userAgent.indexOf('iPhone') >= 0;
const isMobile = isAndroid || isIPhone;
provide('isMobile', isMobile);
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
