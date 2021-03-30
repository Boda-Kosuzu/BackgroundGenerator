<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="carbon"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="10" y="15" width="10" height="5" :fill="subColor6" />
          <rect x="10" y="10" width="10" height="5" :fill="mainColor" />
          <rect x="10" y="5" width="10" height="5" :fill="subColor5" />
          <rect x="10" y="0" width="10" height="5" :fill="subColor4" />
          <rect x="0" y="10" width="10" height="10" :fill="subColor3" />
          <polygon :fill="subColor2" points="0 4 0 10 11 10" />
          <polygon :fill="subColor2" points="-1 5 10 5 10 11" />
          <polygon :fill="subColor1" points="0 -1 0 5 11 5" />
          <polygon :fill="subColor1" points="-1 0 10 0 10 6" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#carbon)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Carbon",
  setup() {
    const store = useStore();
    const mainColor = computed(() => store.state.colorList[0]);
    const subColor1 = computed(() => store.state.colorList[1]);
    const subColor2 = computed(() => store.state.colorList[2]);
    const subColor3 = computed(() => store.state.colorList[3]);
    const subColor4 = computed(() => store.state.colorList[4]);
    const subColor5 = computed(() => store.state.colorList[5]);
    const subColor6 = computed(() => store.state.colorList[6]);

    return {
      mainColor,
      subColor1,
      subColor2,
      subColor3,
      subColor4,
      subColor5,
      subColor6,
    };
  },
});
</script>
