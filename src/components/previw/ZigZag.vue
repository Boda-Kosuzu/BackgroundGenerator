<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="zigZag"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 120 120"
        >
          <polyline
            :stroke="subColor"
            :fill="subColor"
            points="90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 90 90"
          />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#zigZag)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "InputArea",
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
