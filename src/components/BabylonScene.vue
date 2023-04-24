<template>
  <canvas ref="bjsCanvas" class="scene" />
</template>

<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MainScene";

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>

<style scoped>
.scene {
  width: 100%;
}
</style>