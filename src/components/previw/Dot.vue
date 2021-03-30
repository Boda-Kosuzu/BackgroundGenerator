<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="stars"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <circle :fill="subColor" cx="30" cy="30" r="15" />
          <circle :fill="subColor" cx="90" cy="90" r="15" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#stars)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Stars",
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
