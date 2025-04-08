<template>
  <div class="nav-container">
    <the-logo></the-logo>
    <div class="nav-list">
      <router-link to="/home" class="nav-item">Home</router-link>
      <router-link to="/photo" class="nav-item">photo</router-link>
      <router-link to="/paint" class="nav-item">paint</router-link>
      <router-link to="/novel" class="nav-item">novel</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from '@/components/common/TheLogo.vue'
</script>

<style lang="postcss">
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-item {
      min-width: 100px;
    }
  }
}
</style>