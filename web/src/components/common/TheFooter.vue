<template>
  <footer class="footer" :class="{'is-mobile': isMobile}">
    <div class="copyright">
      <router-link :to="{ name: 'home' }">Copyright &copy; 圆企鹅</router-link>
      <a target="_blank" href="https://beian.miit.gov.cn/">辽ICP备2020012261号-1</a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011402000290">
        <img src="/img/icons/beian.png" class="icon" />
        <p>辽公网安备 21011402000290号</p>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const isMobile = inject('isMobile');
</script>

<style lang="postcss" scoped>
.copyright {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  a {
    margin-right: 30px;
    color: white;
    white-space: nowrap;
  }

  .icon {
    width: 14px;
    height: 14px;
    margin-top: 6px;
    float: left;
  }
}

.footer {
  position: relative;
  min-height: 50px;
  margin: 30px auto 0;
  overflow: hidden;
  color: white;
  font-size: 14px;
  filter: drop-shadow(0 2px 2px rgb(0 0 0 / 50%));

  &.is-mobile .copyright {
    flex-direction: column;

    a {
      margin-right: 0;
    }
  }
}

</style>
