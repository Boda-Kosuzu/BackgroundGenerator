<template>
  <div class="buttn-area">
    <button @click="output">出力</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import html2canvas from "html2canvas";

export default defineComponent({
  name: "ButtonArea",
  setup() {
    const output = () => {
      const target = document.getElementById("preveiw");
      if (!target) return;

      html2canvas(target as HTMLElement).then(function (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = `background.png`;
        link.click();
      });
    };

    return {
      output,
    };
  },
});
</script>

<style scoped>
.buttn-area {
  text-align: center;
}
.buttn-area > button {
  font-size: 32px;
}
</style>
