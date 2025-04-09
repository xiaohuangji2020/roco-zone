<template>
  <div>
    <div class="op">
      <a @click="getPrevScreen">Prev</a>
      <a @click="getNextScreen">Next</a>
    </div>
    <div class="grid">
      <div
        v-for="(url, index) of images"
        :key="index"
        :style="{ backgroundImage: 'url(' + url + ')' }"
        class="pic-wall"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import $ from 'jquery';
import { ref, onMounted } from 'vue';

const imagesOrigin: string[] = [];
const images = ref(imagesOrigin);
let nextImages: string[] = [];
const width = window.innerWidth;
const height = window.innerHeight - 100 - 50;
let page = 0;
const pageSize = Math.floor(width / 200) * Math.floor(height / 150);
let timing: ReturnType<typeof setTimeout>;
const waitingTime = 10000 * 1000;
const getNextPics = () => {
  nextImages = [];
  if (page > 4) {
    page = 0;
  }
  if (page < 0) {
    page = 4;
  }
  for (let i = 1; i <= 50; i++) {
    nextImages.push(`/img/picwall/pic-${page}.jpg`);
  }
};
const doAnimation = () => {
  let d = 0; // 延时
  $('.pic-wall').each((index: number, el: Element) => {
    d = Math.random() * 1000; // 1ms to 1000ms delay
    $(el)
      .delay(d)
      .animate(
        { opacity: 0 },
        {
          step: (n: number) => {
            $(el).css('transform', `scale(${n})`);
          },
          duration: 300,
        },
      )
      .promise()
      .done(() => {
        images.value[index] = nextImages[index];
        $(el)
          .animate(
            { opacity: 1 },
            {
              step: (n: number) => {
                $(el).css('transform', `scale(${n})`);
              },
              duration: 700,
            },
          )
          .promise()
          .done(() => {
            $(el).css('transform', 'none');
          });
      });
  });
};
const autoAnmiation = () => {
  page++;
  getNextPics();
  doAnimation();
  timing = setTimeout(() => {
    autoAnmiation();
  }, waitingTime);
};
const getPrevScreen = () => {
  clearTimeout(timing);
  page--;
  getNextPics();
  doAnimation();
  timing = setTimeout(() => {
    autoAnmiation();
  }, waitingTime);
};
const getNextScreen = () => {
  clearTimeout(timing);
  page++;
  getNextPics();
  doAnimation();
  timing = setTimeout(() => {
    autoAnmiation();
  }, waitingTime);
};
onMounted(() => {
  for (let i = 1; i <= pageSize; i++) {
    images.value.push(`/img/picwall/pic-${page}.jpg`);
  }
  timing = setTimeout(() => {
    autoAnmiation();
  }, waitingTime);
});
</script>

<style lang="postcss" scoped>
.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;

  .pic-wall {
    width: 200px;
    height: 150px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

.op {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
