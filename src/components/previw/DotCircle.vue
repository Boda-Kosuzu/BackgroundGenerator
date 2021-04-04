<template>
  <svg viewBox="0 0 1280 720">
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <g :stroke="subColor1" fill="none" stroke-linecap="round" stroke-width="20">
      <circle stroke-dasharray="1 44" cx="640" cy="360" r="200" />
      <circle stroke-dasharray="1 59" cx="640" cy="360" r="400" />
      <circle stroke-dasharray="1 69" cx="640" cy="360" r="600" />
    </g>

    <g :stroke="subColor2" fill="none" stroke-linecap="round" stroke-width="20">
      <circle stroke-dasharray="1 52" cx="640" cy="360" r="100" />
      <circle stroke-dasharray="1 62" cx="640" cy="360" r="300" />
      <circle stroke-dasharray="1 72" cx="640" cy="360" r="500" />
      <circle stroke-dasharray="1 82" cx="640" cy="360" r="700" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "DotCircle",
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
