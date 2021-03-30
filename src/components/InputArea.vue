<template>
  <div class="input-area">
    <select v-model="selected" class="input-area--select">
      <option v-for="item in patterns" :key="item.key" :value="item.key">
        {{ item.name }}
      </option>
    </select>
    <div>
      <ul class="input-area--colors">
        <li v-for="(item, index) in colorList" :key="index" class="input-item">
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
  padding: 60px;
}
.input-area--select {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.input-area--colors {
  font-size: 1.5rem;
}
.input-item > input {
  width: 100px;
}
.input-item + .input-item {
  margin-top: 15px;
}
</style>
