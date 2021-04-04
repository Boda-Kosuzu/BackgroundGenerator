<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="raimon"
          x="0"
          y="0"
          width="230"
          height="165"
          patternUnits="userSpaceOnUse"
        >
          <polyline
            :stroke="subColor1"
            stroke-width="10"
            fill="none"
            points="80,25 65,25 65,45 95,45 95,5 45,5 45,65 115,65 115,5 185,5 185,65 135,65 135,25 165,25 165,45 150,45"
          />
          <g :stroke="subColor2" stroke-width="10" fill="none">
            <polyline
              points="200,110 185,110 185,130 215,130 215,90 165,90 165,150 235,150"
            />
            <polyline
              points="5,155 5,90 75,90 75,150 25,150 25,110 55,110 55,130 40,130"
            />
          </g>
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#raimon)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Raimon",
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
