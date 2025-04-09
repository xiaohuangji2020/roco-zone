<template>
  <div class="box">
    <router-link v-if="note.name" :to="{ name: 'noteContent', query: { name: props.note.name} }" class="link">
      <h5 class="title">{{ props.note.title }}</h5>
      <div class="sub-title">{{ props.note.subTitle }}</div>
    </router-link>
    <a v-if="!props.note.name" :href="props.note.url" class="link">
      <h5 class="title">{{ props.note.title }}</h5>
      <div class="sub-title">{{ props.note.subTitle }}</div>
    </a>
    <div v-if="props.note.demo || props.note.code " class="footer">
      <router-link v-if="props.note.demo" :to="{ name: props.note.demo }" class="item">demo</router-link>
      <a v-if="props.note.code" :href="props.note.code" target="_blank" class="item">code</a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Note {
  title: string;
  subTitle?: string;
  name?: string;
  url?: string;
  demo?: string;
  code?: string;
}
const props = defineProps<{ note: Note }>();
</script>

<style scoped>
.box {
  display: flex;
  position: relative;
  flex-flow: column;
  overflow: hidden;
  transition: transform 0.2s linear;
  border-radius: 10px;
  background: white;
  box-shadow: 0 9px 25px -22px rgb(0 0 0 / 50%);
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    transition: opacity 0.2s linear;
    opacity: 0;
    background: rgb(0 0 0 / 10%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);

    &::before {
      opacity: 1;
    }
  }

  .link {
    padding: 30px 40px;
    color: #414a60;
  }

  .title {
    font-size: 14px;
  }

  .sub-title {
    opacity: 0.9;
    font-size: 12px;
  }

  .footer {
    margin-top: -20px;
    background: rgb(0 0 0 / 10%);
    font-size: 12px;
    line-height: 20px;

    .item {
      display: block;
      position: relative;
      height: 20px;
      padding: 0 30px;
      color: #414a60;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 16px;
        width: 6px;
        height: 6px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #f6f6f8;
      }
    }
  }
}
</style>
