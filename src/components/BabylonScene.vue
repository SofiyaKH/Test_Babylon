<template>
  <div class="new">
    <q-btn-toggle
      v-model="tool"
      class="absolute btn"
      color="secondary"
      glossy
      toggle-color="white"
      :options="[
        { value: 'cursor', slot: 'cursor' },
        { value: 'offset', slot: 'offset' },
        { value: 'rotate', slot: 'rotate' },
        { value: 'scaling', slot: 'scaling' },
      ]"
    >
      <template v-slot:cursor>
        <q-icon color="dark" name="pan_tool_alt" />
      </template>

      <template v-slot:offset>
        <q-icon color="dark" name="pan_tool" />
      </template>

      <template v-slot:rotate>
        <q-icon color="dark" name="rotate_left" />
      </template>

      <template v-slot:scaling>
        <q-icon color="dark" name="zoom_out_map" />
      </template>
    </q-btn-toggle>

    <canvas ref="bjsCanvas" class="scene" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MainScene";

const bjsCanvas = ref(null);
const tool = ref();

onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>

<style lang="scss" scoped>
.new {
  background-color: $dark;
}
.scene {
  width: 100%;
  height: calc(100vh - 8px);
}
.btn {
  top: 0;
  right: 0;
}
</style>