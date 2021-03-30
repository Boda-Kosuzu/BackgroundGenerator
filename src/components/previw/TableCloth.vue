<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="weave"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <g :fill="subColor" fill-opacity=".5">
            <rect x="0" y="0" width="50" height="25" />
            <rect x="0" y="0" width="25" height="50" />
          </g>
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
