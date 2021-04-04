<template>
  <div>
    <div id="preveiw" class="preview-body">
      <component :is="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Argyle from "./previw/Argyle.vue";
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
import DotCircle from "./previw/DotCircle.vue";
import GinghamCheck from "./previw/GinghamCheck.vue";
import Raimon from "./previw/Raimon.vue";

export default defineComponent({
  name: "PreviewArea",
  components: {
    Argyle,
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
    DotCircle,
    GinghamCheck,
    Raimon,
  },
  setup() {
    const store = useStore();
    const selected = computed(() => store.state.selectedPattern);

    return {
      selected,
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
