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
