<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="gingham-check"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
          style="transform: rotate(45deg)"
        >
          <g :fill="color[3]" fill-opacity=".6" style="mix-blend-mode: multiply">
            <rect x="0" y="75" width="100" height="25" />
            <rect x="75" y="0" width="25" height="100" />
          </g>
          <g :fill="color[2]" fill-opacity=".6" style="mix-blend-mode: multiply">
            <rect x="0" y="50" width="100" height="25" />
            <rect x="50" y="0" width="25" height="100" />
          </g>
          <g :fill="color[1]" fill-opacity=".6" style="mix-blend-mode: multiply">
            <rect x="0" y="25" width="100" height="25" />
            <rect x="25" y="0" width="25" height="100" />
          </g>
          <g :fill="color[0]" fill-opacity=".6" style="mix-blend-mode: multiply">
            <rect x="0" y="0" width="100" height="25" />
            <rect x="0" y="0" width="25" height="100" />
          </g>
        </pattern>
      </g>
    </defs>
    <rect fill="url(#gingham-check)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "GinghamCheck",
  setup() {
    const store = useStore();
    const color = computed(() => store.state.colorList);

    return {
      color,
    };
  },
});
</script>
