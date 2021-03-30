<template>
  <svg viewBox="0 0 1280 720">
    <defs>
      <g>
        <pattern
          id="seigaiha"
          x="0"
          y="0"
          width="100"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <circle :fill="subColor" cx="100" cy="25" r="50" />
          <circle :fill="mainColor" cx="100" cy="25" r="44" />
          <circle :fill="subColor" cx="100" cy="25" r="35" />
          <circle :fill="mainColor" cx="100" cy="25" r="29" />
          <circle :fill="subColor" cx="100" cy="25" r="20" />
          <circle :fill="mainColor" cx="100" cy="25" r="14" />
          <circle :fill="subColor" cx="100" cy="25" r="6" />

          <circle :fill="subColor" cx="0" cy="25" r="50" />
          <circle :fill="mainColor" cx="0" cy="25" r="44" />
          <circle :fill="subColor" cx="0" cy="25" r="35" />
          <circle :fill="mainColor" cx="0" cy="25" r="29" />
          <circle :fill="subColor" cx="0" cy="25" r="20" />
          <circle :fill="mainColor" cx="0" cy="25" r="14" />
          <circle :fill="subColor" cx="0" cy="25" r="6" />

          <circle :fill="subColor" cx="50" cy="50" r="50" />
          <circle :fill="mainColor" cx="50" cy="50" r="44" />
          <circle :fill="subColor" cx="50" cy="50" r="35" />
          <circle :fill="mainColor" cx="50" cy="50" r="29" />
          <circle :fill="subColor" cx="50" cy="50" r="20" />
          <circle :fill="mainColor" cx="50" cy="50" r="14" />
          <circle :fill="subColor" cx="50" cy="50" r="6" />

          <circle :fill="subColor" cx="100" cy="75" r="50" />
          <circle :fill="mainColor" cx="100" cy="75" r="44" />
          <circle :fill="subColor" cx="100" cy="75" r="35" />
          <circle :fill="mainColor" cx="100" cy="75" r="29" />
          <circle :fill="subColor" cx="100" cy="75" r="20" />
          <circle :fill="mainColor" cx="100" cy="75" r="14" />
          <circle :fill="subColor" cx="100" cy="75" r="6" />

          <circle :fill="subColor" cx="0" cy="75" r="50" />
          <circle :fill="mainColor" cx="0" cy="75" r="44" />
          <circle :fill="subColor" cx="0" cy="75" r="35" />
          <circle :fill="mainColor" cx="0" cy="75" r="29" />
          <circle :fill="subColor" cx="0" cy="75" r="20" />
          <circle :fill="mainColor" cx="0" cy="75" r="14" />
          <circle :fill="subColor" cx="0" cy="75" r="6" />
        </pattern>
      </g>
    </defs>
    <rect :fill="mainColor" x="0" y="0" width="1280" height="720" />
    <rect fill="url(#seigaiha)" x="0" y="0" width="1280" height="720" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Seigaiha",
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
