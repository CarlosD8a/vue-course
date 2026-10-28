<template>
  <section class="flex flex-col">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :class="[
        'capitalize disabled:shadow-none disabled:opacity-60',
        {
          correct: id === answer && blockSelection,
          incorrect: id !== answer && blockSelection,
        },
      ]"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
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
@reference "../../../assets/styles.css";
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-green-800 text-white;
}

.incorrect {
  @apply bg-red-700 text-white;
}
</style>
