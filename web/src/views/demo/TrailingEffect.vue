<template>
  <canvas id="trailing-effect-canvas" :width="width" :height="height"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

interface Part {
  x: number;
  y: number,
  vx: number; // 初始速度
  vy: number;
  ts: number; // 出生时间
  tl: number; // 寿命
  h: number; // 用于hsla颜色的随机值
  text: string;
}
let width = window.innerWidth;
let height = window.innerHeight;
let drawer = 0;
let ctx: CanvasRenderingContext2D;
const parts: Part[] = []; // 页面上蹦跶的内容数组，也就是需要绘制的内容数组
const text = ['命', '里', '多', '水'];
const textSize = 50;
const glowSize = 20; // 阴影大小
const trailSize = 0.9; // 会转化成透明度，为1则不会清除尾巴，为0则下一帧立即清除尾巴
const minTime = 3000; // 蹦跶的内容最小存活时间
const maxTime = 10000; // 蹦跶的内容最大存活时间
const batchCount = 1; // 同时刷新出来一批的数量
const limitCount = 20; // 页面上同时存在的最大数量
const pullRadius = 100; // 鼠标靠近后的吸引范围
const pullTime = 7; // 吸引过来所需的时间
let mouseX = -10000; // 鼠标初始时给定的x坐标
let mouseY = -10000;
const getDrawText = () => {
  const index = Math.floor(Math.random() * text.length);
  return text[index];
};
const getPartParam = () => ({
  x: Math.random() * width, // 初始坐标
  y: -textSize,
  vx: Math.random() * 4 - 2, // 初始速度
  vy: Math.random() * 2 - 1,
  ts: Date.now(), // 出生时间
  tl: Math.random() * (maxTime - minTime) + minTime, // 寿命
  h: Math.random() * (320 - 170) + 170, // 用于hsla颜色的随机值
  text: getDrawText(),
});
const createPart = () => {
  if (parts.length < limitCount) {
    // 过多就不新建了
    for (let i = 0; i < batchCount; i++) {
      parts.push(getPartParam());
    }
  }
};
const draw = () => {
  parts.forEach((part) => {
    const dif = (Date.now() - part.ts) / part.tl;
    const alpha = 1 - Math.round(dif * 100) / 100;
    ctx.beginPath();
    ctx.strokeStyle = `hsla(0,0%,100%,${alpha})`;
    ctx.fillStyle = `hsla(${part.h}, 100%, 50%, ${alpha})`;
    ctx.shadowColor = `hsla(${part.h}, 100%, 50%, ${alpha})`;
    ctx.shadowBlur = glowSize;
    ctx.strokeText(part.text, part.x - textSize, part.y + textSize / 2);
    ctx.fillText(part.text, part.x - textSize, part.y + textSize / 2);
    ctx.closePath();
  });
};
const dist = (x1: number, y1: number, x2: number, y2: number) => {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
};
const move = () => {
  parts.forEach((part) => {
    if (part.y + textSize / 2 >= height) {
      part.vy = -part.vy * 0.8;
      part.y = height - textSize;
      part.vx *= 0.8;
    }
    part.vy += 0.2;
    part.x += part.vx;
    part.y += part.vy;
    if (dist(part.x, part.y, mouseX, mouseY) < pullRadius) {
      part.vx = (mouseX - part.x) / pullTime;
      part.vy = (mouseY - part.y) / pullTime;
    }
  });
};
const lifeTime = () => {
  parts.forEach((part, index) => {
    if (part.ts + part.tl < Date.now()) {
      parts.splice(index, 1);
    }
  });
};
const clearCanvas = () => {
  ctx.shadowBlur = 0;
  ctx.fillStyle = `rgba(0, 0, 0, ${Math.abs(trailSize - 1)})`;
  ctx.rect(0, 0, width, height);
  ctx.fill();
};
const render = () => {
  clearCanvas();
  draw(); // 绘制
  move(); // 移动
  lifeTime(); // 清除的方法放到绘制循环中，即 当寿命到了，就直接清除掉，另一个函数较慢
  requestAnimationFrame(render);
};
onMounted(() => {
  const canvas = document.getElementById('trailing-effect-canvas') as HTMLCanvasElement;
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
  });
  canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  canvas.addEventListener('mouseleave', () => {
    mouseX = -pullRadius;
    mouseY = -pullRadius;
  });
  canvas.addEventListener('touchmove', (e) => {
    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY;
  });
  canvas.addEventListener('touchend', () => {
    mouseX = -pullRadius;
    mouseY = -pullRadius;
  });
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.lineWidth = textSize / 4;
  ctx.font = `${textSize}px muyaosoftbrush, sans-serif`;
  setInterval(createPart, 300); // 控制新增
  drawer = requestAnimationFrame(render); // 绘制
});
onBeforeUnmount(() => {
  cancelAnimationFrame(drawer);
});
</script>

<style lang="postcss" scoped>
#trailing-effect-canvas {
  height: 100vh;
  overflow: hidden;
  cursor: default;
}
</style>
