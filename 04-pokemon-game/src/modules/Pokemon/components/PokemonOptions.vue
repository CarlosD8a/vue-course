<template>
  <ul class="buttons compact">
    <li v-for="{ name, id } in options" :key="id">
      <button
        @click="$emit('selectedOption', id)"
        :class="{
          correct: blockSelection && id === answer,
          incorrect: blockSelection && id !== answer,
        }"
        :disabled="blockSelection"
      >
        {{ name }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  answer: number;
}

defineProps<Props>();

defineEmits<{
  // ya con esto solo digo que voy a emitir pero aun no se emite
  selectedOption: [id: number];
}>();
</script>

<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Al terminar la ronda se marca la correcta y las incorrectas */
button.correct {
  opacity: 1;
  font-weight: bold;
}

button.correct::before {
  content: '▶ ';
}

button.incorrect {
  text-decoration: line-through;
}
</style>
