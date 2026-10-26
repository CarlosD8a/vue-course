<template>
  <section class="w-64 bg-orange-500 rounded-2xl p-8 text-center text-white">
    <h3 class="text-xl font-bold">Counter: {{ counter }}</h3>
    <h3 class="text-xl font-bold">Square: {{ squareCounter }}</h3>

    <div class="mt-6 flex justify-center gap-2">
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

// import { ref, computed } from 'vue';

interface Props {
  numberValue: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.numberValue);

// const counter = ref(props.numberValue);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style></style>
