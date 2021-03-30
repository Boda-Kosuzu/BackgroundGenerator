<template>
  <main class="main">
    <input-area class="main--input-area" />
    <preview-area class="main--preview-area" />
    <button-area class="main--button-area" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputArea from './components/InputArea.vue';
import PreviewArea from './components/PreviewArea.vue';
import ButtonArea from './components/ButtonArea.vue';
import 'resetcss'

export default defineComponent({
  name: 'App',
  components: {
    InputArea,
    PreviewArea,
    ButtonArea,
  }
});
</script>

<style scope>
  .main {
    display: grid;
    grid-template-rows: 80vh 20vh;
    grid-auto-columns: 30vw 70vw;
  }
  .main--input-area {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .main--preview-area {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .main--button-area {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
</style>
