<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="tartan"
          x="0"
          y="0"
          width="256"
          height="256"
          patternUnits="userSpaceOnUse"
        >
          <g :fill="subColor1" fill-opacity=".03">
            <rect x="128" y="0" width="128" height="720" />
            <rect x="0" y="128" width="1280" height="128" />
          </g>
          <g :stroke="subColor1" stroke-width="4" stroke-opacity=".4">
            <line x1="59" y1="0" x2="59" y2="256" />
            <line x1="69" y1="0" x2="69" y2="256" />
            <line x1="0" y1="59" x2="1280" y2="59" />
            <line x1="0" y1="69" x2="1280" y2="69" />
          </g>
          <g :stroke="subColor2" stroke-width="4" stroke-opacity=".4">
            <line x1="187" y1="0" x2="187" y2="720" />
            <line x1="197" y1="0" x2="197" y2="720" />
            <line x1="0" y1="187" x2="1280" y2="187" />
            <line x1="0" y1="197" x2="1280" y2="197" />
          </g>
        </pattern>
        <pattern
          id="hatching"
          x="0"
          y="0"
          width="10"
          height="10"
          patternTransform="rotate(-45)"
          patternUnits="userSpaceOnUse"
          fill="none"
          :stroke="subColor1"
          stroke-opacity=".2"
        >
          <rect class="c2" width="10" height="1" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#hatching)" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#tartan)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Tartan",
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
