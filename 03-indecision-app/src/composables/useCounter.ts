import { ref, computed } from 'vue';

export const useCounter = (initualValue: number = 10) => {
  const counter = ref(initualValue);
  const squareCounter = computed(() => counter.value * counter.value);
  return {
    counter,
    squareCounter,
  };
};
