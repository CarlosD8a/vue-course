<template>
  <section class="w-64 bg-purple-500 rounded-2xl p-8 text-center text-white">
    <h3 class="text-xl font-bold">Counter: {{ counter }}</h3>
    <h3 class="text-xl font-bold">Square: {{ squareCounter }}</h3>

    <div class="mt-6 flex justify-center gap-2">
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    numberValue: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.numberValue);

    return {
      counter,
      squareCounter,
    };
  },
});

// import { ref, computed } from 'vue';

// const props = defineProps<{
//   numberValue: number;
// }>();

// const counter = ref(props.numberValue);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
