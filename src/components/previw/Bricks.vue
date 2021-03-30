<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="bricks"
          x="0"
          y="0"
          width="57"
          height="62"
          patternUnits="userSpaceOnUse"
        >
          <rect x="5" y="5" width="52" height="26" :fill="subColor1" />
          <rect x="0" y="36" width="26" height="26" :fill="subColor2" />
          <rect x="31" y="36" width="26" height="26" :fill="subColor2" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#bricks)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Bricks",
  setup() {
    const store = useStore();
    const mainColor = computed(() => store.state.colorList[0]);
    const subColor1 = computed(() => store.state.colorList[1]);
    const subColor2 = computed(() => store.state.colorList[2]);

    return {
      mainColor,
      subColor1,
      subColor2,
    };
  },
});
</script>
