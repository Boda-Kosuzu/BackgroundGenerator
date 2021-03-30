<template>
  <div>
    <div id="preveiw" class="preview-body">
      <argayle v-if="isArgayle" />
      <bricks v-if="isBricks" />
      <vertical-strips v-if="isVerticalStrips" />
      <weave v-if="isWeave" />
      <zig-zag v-if="isZigZag" />
      <carbon v-if="isCarbon" />
      <diagonal-strips v-if="isDiagonalStrips" />
      <dot v-if="isDot" />
      <horizonal-strips v-if="isHorizonalStrips" />
      <seigaiha v-if="isSeigaiha" />
      <stars v-if="isStars" />
      <table-cloth v-if="isTablecloth" />
      <tartan v-if="isTartan" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Argayle from "./previw/Argayle.vue";
import Bricks from "./previw/Bricks.vue";
import VerticalStrips from "./previw/VerticalStrips.vue";
import Weave from "./previw/Weave.vue";
import ZigZag from "./previw/ZigZag.vue";
import Carbon from "./previw/Carbon.vue";
import DiagonalStrips from "./previw/DiagonalStrips.vue";
import Dot from "./previw/Dot.vue";
import HorizonalStrips from "./previw/HorizonalStrips.vue";
import Seigaiha from "./previw/Seigaiha.vue";
import Stars from "./previw/Stars.vue";
import TableCloth from "./previw/TableCloth.vue";
import Tartan from "./previw/Tartan.vue";

export default defineComponent({
  name: "PreviewArea",
  components: {
    Argayle,
    Bricks,
    VerticalStrips,
    Weave,
    ZigZag,
    Carbon,
    DiagonalStrips,
    Dot,
    HorizonalStrips,
    Seigaiha,
    Stars,
    TableCloth,
    Tartan,
  },
  setup() {
    const store = useStore();
    const isArgayle = computed(() => store.getters.isArgayle);
    const isBricks = computed(() => store.getters.isBricks);
    const isVerticalStrips = computed(() => store.getters.isVerticalStrips);
    const isWeave = computed(() => store.getters.isWeave);
    const isZigZag = computed(() => store.getters.isZigZag);
    const isCarbon = computed(() => store.getters.isCarbon);
    const isDiagonalStrips = computed(() => store.getters.isDiagonalStrips);
    const isDot = computed(() => store.getters.isDot);
    const isHorizonalStrips = computed(() => store.getters.isHorizonalStrips);
    const isSeigaiha = computed(() => store.getters.isSeigaiha);
    const isStars = computed(() => store.getters.isStars);
    const isTablecloth = computed(() => store.getters.isTablecloth);
    const isTartan = computed(() => store.getters.isTartan);

    return {
      isArgayle,
      isBricks,
      isVerticalStrips,
      isWeave,
      isZigZag,
      isCarbon,
      isDiagonalStrips,
      isDot,
      isHorizonalStrips,
      isSeigaiha,
      isStars,
      isTablecloth,
      isTartan,
    };
  },
});
</script>

<style scoped>
.preview-body {
  width: 1280px;
  height: 720px;
}
</style>
