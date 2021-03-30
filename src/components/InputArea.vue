<template>
  <div class="input-area">
    <select v-model="selected">
      <option v-for="item in patterns" :key="item.key" :value="item.key">
        {{ item.name }}
      </option>
    </select>
    <div>
      <ul>
        <li v-for="(item, index) in colorList" :key="index">
          {{ `色${index + 1}` }}
          <input type="color" :value="item" @change="updateColor(index, $event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "InputArea",
  setup() {
    const store = useStore();
    const patterns = computed(() => store.state.patterns);
    const selected = computed({
      get: () => store.state.selectedPattern,
      set: (selected: string) => store.dispatch("updateSelectedPattern", selected),
    });
    const colorList = computed(() => store.state.colorList);
    const updateColor = (index: any, event: { target: { value: any } }) => {
      store.dispatch("updateColor", { index, value: event.target.value });
    };

    return {
      patterns,
      selected,
      colorList,
      updateColor,
    };
  },
});
</script>

<style scoped>
.input-area {
  padding: 30px;
}
</style>
