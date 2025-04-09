<template>
  <canvas id="canvas-wave"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('canvas-wave') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;

  const A = 30;
  const W = 1 / 200;
  let Q = 0;
  const H = height / 2;

  const A2 = 30;
  const W2 = 1 / 300;
  let Q2 = 0;
  const H2 = height / 2;

  const speed = -0.01;
  const speed2 = -0.02;

  const lingrad = ctx.createLinearGradient(0, 0, width, 0);
  lingrad.addColorStop(0, 'rgba(100, 149, 237, 0.2)');
  lingrad.addColorStop(1, 'rgba(65, 105, 225, 0.1)');

  const lingrad2 = ctx.createLinearGradient(0, 0, width, 0);
  lingrad2.addColorStop(0, 'rgba(135, 206, 250, 0.2)');
  lingrad2.addColorStop(1, 'rgba(30, 144, 255, 0.1)');
  const draw = () => {
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.fillStyle = lingrad;
    ctx.moveTo(0, height / 2);
    // 绘制第一个波形
    Q += speed;
    for (let x = 0; x <= width; x++) {
      const s = 0.2 * Math.sin(x / 150) + 1;
      let y = A * Math.sin(W * x + Q) + H;
      y *= s;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();
    ctx.closePath();
    // 设置重叠效果
    ctx.globalCompositeOperation = 'destination-over';
    // 绘制第二个波形
    ctx.beginPath();
    ctx.fillStyle = lingrad2;
    Q2 += speed2;
    for (let x = 0; x < width; x++) {
      const y = A2 * Math.sin(x * W2 + Q2) + H2;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();
    ctx.closePath();
  };
  draw();
});
</script>
