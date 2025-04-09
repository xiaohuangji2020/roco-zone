<template>
  <div class="header-wrap">
    <header class="header">
      <router-link :to="{ name: 'home' }" class="logo"></router-link>
      <div class="header-icon">
        <a href="https://github.com/roco2015" target="_blank" title="roco2015@github.com">
          <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#icon-github" />
          </svg>
        </a>
        <a>
          <svg class="svg-icon icon-qq" aria-hidden="true">
            <use xlink:href="#icon-qq" />
          </svg>
        </a>
        <a title="roco2015@163.com">
          <svg class="svg-icon icon-email" aria-hidden="true">
            <use xlink:href="#icon-email" />
          </svg>
        </a>
      </div>
      <div class="header-motto">
        <span class="motto-1">半仙算我命里多水</span>
        <span class="motto-2">随处去浪</span>
      </div>
    </header>
    <ul class="menu">
      <li v-for="(item, index) of navList" :key="index" class="menu-item">
        <router-link :to="{ name: item.name }" class="link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navList from './data/nav.json';

export default defineComponent({
  name: 'ThePCHeader',
  setup() {
    return {
      navList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: currentcolor;
  vertical-align: -0.15em;
}

.logo {
  align-self: stretch;
  width: 100px;
  margin: 0 15px;
  background: url("@/assets/images/logo.png") no-repeat center;
  background-size: contain;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 50%));
}

.header-wrap {
  height: 200px;
  margin: 0 auto;
  padding: 0 15px;
  font-weight: 500;

  .header {
    display: flex;
    height: 124px;
    margin-bottom: 20px;
    padding-top: 60px;
    line-height: 64px;

    .header-icon {
      display: flex;
      flex: 1;
      margin-left: 20px;
      font-size: 22px;

      .svg-icon {
        margin-right: 20px;
        color: var(--dark);
      }

      .icon-qq {
        font-size: 0.96em;
      }

      .icon-email {
        font-size: 1.1em;
      }
    }

    .header-motto {
      display: flex;
      flex-flow: column;
      justify-content: center;
      font-family:
        muyaosoftbrush,
        arial,
        verdana,
        helvetica,
        'PingFang SC',
        'HanHei SC',
        STHeitiSC-Light,
        "Microsoft Yahei",
        sans-serif;
      text-shadow: 1px 1px white;
      filter: drop-shadow(2px 4px 6px #6cf);

      .motto-1 {
        font-size: 40px;
        line-height: 1;
      }

      .motto-2 {
        align-self: flex-end;
        font-size: 30px;
        line-height: 1;
      }
    }
  }

  .menu {
    display: flex;
    width: 950px;
    height: 44px;
    line-height: 44px;

    .menu-item {
      padding: 0 5px;

      .link {
        display: block;
        padding: 0 10px;
        color: var(--dark);
      }
    }
  }
}

@media (width <= 950px) {
  .header-wrap {
    .header {
      .header-motto {
        .motto-1 {
          font-size: 2rem;
        }

        .motto-2 {
          font-size: 1.5rem;
        }
      }
    }

    .menu {
      width: 100%;
    }
  }
}
</style>
