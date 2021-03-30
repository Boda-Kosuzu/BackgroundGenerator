<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="diagonal-strips"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <g :fill="subColor" style="transform: rotate(-45deg)">
            <rect x="0" y="0" width="35" height="150" />
            <rect x="-71" y="25" width="35" height="150" />
          </g>
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#diagonal-strips)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "DiagonalStrips",
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
