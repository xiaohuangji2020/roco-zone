<template>
  <the-mobile-header v-if="isMobile"></the-mobile-header>
  <the-pc-header v-else></the-pc-header>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import ThePcHeader from './ThePCHeader.vue';
import TheMobileHeader from './TheMobileHeader.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    ThePcHeader,
    TheMobileHeader,
  },
  setup() {
    const isMobile = inject('isMobile', false);
    return {
      isMobile,
    };
  },
});
</script>
