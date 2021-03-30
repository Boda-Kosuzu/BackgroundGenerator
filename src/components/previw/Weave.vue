<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="weave"
          x="0"
          y="0"
          width="100"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <polyline
            :stroke="subColor"
            fill="none"
            points="-25 75, 50 0, 100 50 0 150 100 250"
            stroke-width="3"
          />
          <line x1="50" y1="100" x2="150" y2="200" :stroke="subColor" stroke-width="3" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#weave)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Weave",
  setup() {
    const store = useStore();
    const mainColor = computed(() => store.state.colorList[0]);
    const subColor = computed(() => store.state.colorList[1]);

    return {
      mainColor,
      subColor,
    };
  },
});
</script>
