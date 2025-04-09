<template>
  <the-header></the-header>
  <main class="note-wrap">
    <section v-for="notes of notesList" :key="notes.title" class="sec-note">
      <h4 class="sub-title">{{notes.title}}</h4>
      <div class="inner">
        <note-card v-for="note of notes.notes" :key="note.title" :note="note" class="note-card"></note-card>
      </div>
    </section>
  </main>
  <the-footer></the-footer>
</template>

<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import NoteCard from '@/views/note/components/NoteCard.vue';
import notesList from '@/views/note/data/note.json';
import TheFooter from '@/components/common/TheFooter.vue';
</script>

<style scoped>
.note-wrap {
  width: 950px;
  margin: 0 auto;
}

.sec-note {
  margin-top: 60px;

  .sub-title {
    margin-top: 20px;
    border-bottom: 1px solid var(--gray-light);
    text-align: left;
  }

  .inner {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    align-items: flex-start;

    .note-card {
      margin: 15px 15px 0 0;
    }
  }
}

@media (width <= 950px) {
  .note-wrap {
    width: 100%;
  }

  .sec-note {
    margin-top: 40px;

    &:first-of-type {
      margin-top: 0;
    }

    .sub-title {
      padding-left: 15px;
    }

    .inner {
      .note-card {
        margin: 15px 0 0 15px;
      }
    }
  }
}
</style>
