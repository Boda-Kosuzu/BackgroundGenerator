<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="Argyle"
          x="0"
          y="0"
          width="80"
          height="120"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 80 120"
        >
          <polyline :fill="`${subColor1}1a`" points="40 0, 0 60, 40 120, 80 60, 40 0" />
          <line
            x1="0"
            y1="0"
            x2="80"
            y2="120"
            :stroke="`${subColor2}1a`"
            stroke-width="3"
          />
          <line
            x1="80"
            y1="0"
            x2="0"
            y2="120"
            :stroke="`${subColor2}1a`"
            stroke-width="3"
          />
        </pattern>
      </g>
    </defs>

    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#Argyle)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Argyle",
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
