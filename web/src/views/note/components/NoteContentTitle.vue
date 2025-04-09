<template>
  <div class="title-box">
    <h3 class="title">{{ props.title }}</h3>
    <div class="sub-title">
      <div class="time">{{ props.date }}</div>
      <div class="author">by: {{ props.author }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  title: string,
  date: string,
  author?: string
}>(), {
  author: '',
});
</script>

<style scoped>
.title-box {
  position: sticky;
  z-index: 11;
  top: 0;
  margin-bottom: 20px;
  background: rgb(255 250 240 / 95%);
  box-shadow: 0 1px 10px rgb(0 0 0 / 50%);

  .title {
    text-align: left;
  }
}

.sub-title {
  display: flex;
  justify-content: space-between;
}

.time {
  color: @gray;
}
</style>
